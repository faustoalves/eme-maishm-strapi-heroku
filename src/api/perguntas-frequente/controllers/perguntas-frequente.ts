const apiType = "api::perguntas-frequente.perguntas-frequente";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: {
        grupos: {
          populate: "*",
        },
      },
    });
    return entity;
  },
}));
