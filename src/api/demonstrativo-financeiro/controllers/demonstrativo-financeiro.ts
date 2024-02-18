const apiType = "api::demonstrativo-financeiro.demonstrativo-financeiro";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: {
        seo: {
          populate: "*",
        },
        lista: {
          populate: "*",
        },
      },
    });
    return entity;
  },
}));
