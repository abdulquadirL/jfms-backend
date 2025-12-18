// scripts/import-mysql.cjs
const fs = require('fs');

module.exports = async ({ strapi }) => {
  const data = JSON.parse(fs.readFileSync('sqlite-export.json', 'utf8'));

  for (const uid of Object.keys(data)) {
    console.log(`Importing ${uid}`);

    for (const entry of data[uid]) {
      const { id, createdAt, updatedAt, publishedAt, ...rest } = entry;

      // Flatten relational fields to IDs only
      for (const key in rest) {
        if (Array.isArray(rest[key])) {
          rest[key] = rest[key].map((item) => item.id);
        } else if (rest[key] && typeof rest[key] === 'object' && 'id' in rest[key]) {
          rest[key] = rest[key].id;
        }
      }

      try {
        await strapi.db.query(uid).create({
          data: {
            ...rest,
            publishedAt: publishedAt || null, // preserve publish state
          },
        });
      } catch (err) {
        console.error(`Error importing ${uid}:`, err);
      }
    }
  }

  console.log('✅ MySQL import complete');
};
