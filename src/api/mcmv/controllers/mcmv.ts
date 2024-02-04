const apiType = "api::mcmv.mcmv";

import { factories } from "@strapi/strapi";
import { getEstelar } from "../../../collections/estelar";
import { parseImage } from "../../../parses/common/image";
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
          populate: {
            lista: {
              populate: "*",
            },
          },
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
    entity.banner.imagem = parseImage(entity.banner.imagem);
    entity.simulacao.imagem = parseImage(entity.simulacao.imagem);
    entity.vantagens.lista = entity.vantagens.lista.map((item) => {
      item.icone = parseImage(item.icone);
      return item;
    });
    return { ...entity, estelar: estelar };
  },
}));
