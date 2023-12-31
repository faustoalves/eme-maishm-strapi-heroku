const apiType = "api::mcmv.mcmv";

import { factories } from "@strapi/strapi";
import { getEstelar } from "../../../collections/estelar";
import { parseSeo } from "../../../parses/common/seo";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: {
        seo: {
          populate: "*",
        },
        banner: {
          populate: "*",
        },
        vantagens: {
          populate: "*",
        },
        simulacao: {
          populate: "*",
        },
        faixas: {
          populate: "*",
        },
        taxasJuros: {
          populate: "*",
        },
        duvidas: {
          populate: {
            lista: {
              populate: "*",
            },
          },
        },
      },
    });
    let estelar = await getEstelar(strapi);
    entity.seo = parseSeo(entity.seo);
    return { ...entity, estelar: estelar };
  },
}));
