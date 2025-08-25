/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  header: {
    populate: {
      logo: {
        populate: {
          image: {
         fields: ["alternativeText", "url"]
        }
        }
      },
      
      navitems: true,
      cta: true,
    }
  },
  footer: {
    populate: {
      logo: {
        populate: {
        image: {
          fields: ["alternativeText", "url"]
          }
        }
      },
      
      navitems: true
    }
  }
};


export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.dir(ctx.query, { depth: null });
    ctx.query.populate = populate;
    strapi.log.info('In global-populate middleware.');
    
    await next();
  };
};

