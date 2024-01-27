const apiType = "api::venda-sua-area.venda-sua-area";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: {
        cta: {
          populate: "*",
        },
      },
    });
    return entity;
  },
}));
