/**
 * `global-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
   blocks: {
    on: {
      "blocks.hero": {
        populate: {
        image: {
          fields: ["alternativeText", "url"]
        }
        }
      },
      "blocks.service-section": true,
      "blocks.card-grid": {
        populate: {
          cards: true,
        }
      },
      "blocks.news": {
        populate: {
          events: {
            populate: {
              newsLink: true,
            }

          }
        }
      },
      "blocks.contact-section": {
        populate: {
          contactInfo: true,
        }
      }
        
    }
  }
};
export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In global-page-populate middleware.');
    ctx.query.populate = populate;
    await next();
  };
};

