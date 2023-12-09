/**
 * search controller
 */

import { factories } from "@strapi/strapi";
const { createCoreController } = require("@strapi/strapi").factories;

export default factories.createCoreController(
  "api::search.search",
  ({ strapi }) => ({
    async getByKey(ctx) {
      let { key } = ctx.query;
      let entity = await strapi.entityService.findOne("api::search.search", 1, {
        populate: {
          items: {
            populate: "*",
          },
        },
      });
      entity.items = entity.items.filter(
        (item) =>
          item.name.toLowerCase().includes(key.toLowerCase()) ||
          item.keyword.toLowerCase().includes(key.toLowerCase()),
      );
      return entity.items.map((item) => {
        return item;
      });
    },
  }),
);
