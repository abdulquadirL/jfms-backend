'use strict';
const fs = require('fs');

module.exports = async ({ strapi }) => {
  const contentTypes = Object.keys(strapi.contentTypes).filter(
    (uid) =>
      !uid.startsWith('admin::') &&
      !uid.startsWith('plugin::') &&
      strapi.contentTypes[uid].kind === 'collectionType'
  );

  const data = {};

  for (const uid of contentTypes) {
    const result = await strapi.entityService.findMany(uid, {
      populate: '*',
      limit: -1,
    });

    data[uid] = Array.isArray(result) ? result : [result];
    console.log(`Exported ${uid}`);
  }

  fs.writeFileSync('export.json', JSON.stringify(data, null, 2));
  console.log('\n✅ export.json created');
};
