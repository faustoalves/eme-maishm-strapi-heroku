const apiType = "api::sobre.sobre";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: "*",
    });
    return entity;
  },
}));
