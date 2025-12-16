'use strict';

const fs = require('fs');

const BATCH_SIZE = 50;

// Fields Strapi must NOT receive
const SYSTEM_FIELDS = [
  'id',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'createdBy',
  'updatedBy',
];

const sanitize = (entry) => {
  const clean = { ...entry };
  for (const field of SYSTEM_FIELDS) {
    delete clean[field];
  }
  return clean;
};

module.exports = async ({ strapi }) => {
  const raw = fs.readFileSync('export.json', 'utf8');
  const data = JSON.parse(raw);

  for (const uid of Object.keys(data)) {
    console.log(`\nImporting ${uid}`);

    const entries = data[uid];
    let count = 0;

    for (let i = 0; i < entries.length; i += BATCH_SIZE) {
      const batch = entries.slice(i, i + BATCH_SIZE);

      for (const entry of batch) {
        await strapi.entityService.create(uid, {
          data: sanitize(entry),
        });
        count++;
      }

      console.log(`  Imported ${count}/${entries.length}`);
    }
  }

  console.log('\n✅ Import complete');
};
