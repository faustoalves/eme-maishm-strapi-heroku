import { factories } from "@strapi/strapi";
const { createCoreController } = require("@strapi/strapi").factories;

export default factories.createCoreController(
  "api::navegacao.navegacao",
  ({ strapi }) => ({
    async getNavbar(ctx) {
      let entity = await strapi.entityService.findOne(
        "api::navegacao.navegacao",
        1,
        {
          populate: {
            navbarItens: {
              populate: "*",
            },
            socialItens: {
              populate: "*",
            },
          },
        }
      );
      return {
        whatsAppLabel: entity.whatsAppLabel,
        searchLabel: entity.searchLabel,
        navbar: entity.navbarItens,
        social: entity.socialItens,
      };
    },
    async getFooter(ctx) {
      let entity = await strapi.entityService.findOne(
        "api::navegacao.navegacao",
        1,
        {
          populate: {
            footerItens: {
              populate: "*",
            },
            socialItens: {
              populate: "*",
            },
          },
        }
      );
      return {
        footer: entity.footerItens,
        social: entity.socialItens,
      };
    },
  })
);
