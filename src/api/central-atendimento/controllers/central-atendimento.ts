const apiType = "api::central-atendimento.central-atendimento";

import { factories } from "@strapi/strapi";
import { getAllCitiesByState } from "../../../collections/cidades";
import { getEstelar } from "../../../collections/estelar";
import { parseSeo } from "../../../parses/common/seo";
import { parseCTA } from "../../../parses/cta";

export default factories.createCoreController(apiType, ({ strapi }) => ({
  async getContent(ctx) {
    let entity = await strapi.entityService.findOne(apiType, 1, {
      populate: {
        seo: {
          populate: "*",
        },
        botoes: {
          populate: "*",
        },
        cta: {
          populate: "*",
        },
        telefones: {
          populate: "*",
        },
        grupoAssessoria: {
          populate: "*",
        },
      },
    });
    entity.seo = parseSeo(entity.seo);
    let cidades = await getAllCitiesByState(strapi);
    let estelar = await getEstelar(strapi);
    entity.cta = parseCTA(entity.cta);
    delete entity.id;
    delete entity.createdAt;
    delete entity.updatedAt;
    return {
      ...entity,
      estelar: estelar,
    };
  },
}));
