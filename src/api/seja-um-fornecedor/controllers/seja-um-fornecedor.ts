const apiType = "api::seja-um-fornecedor.seja-um-fornecedor";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: {
        cta: {
          populate: "*",
        },
        seo: {
          populate: "*",
        },
      },
    });
    return entity;
  },
}));
