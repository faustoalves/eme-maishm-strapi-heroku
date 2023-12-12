const apiType = "api::home.home";

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
          populate: {
            lista: {
              populate: "*",
            },
          },
        },
        ondeMorar: {
          populate: "*",
        },
        ctas: {
          populate: "*",
        },
      },
    });
    entity.seo = parseSeo(entity.seo);
    entity.banner.lista = entity.banner.lista.map((item) => {
      item.mobileImage = parseImage(item.mobileImage);
      item.desktopImage = parseImage(item.desktopImage);
      return item;
    });
    let estelar = await getEstelar(strapi);
    entity.ctas = entity.ctas.map((item) => {
      delete item.createdAt;
      delete item.updatedAt;
      delete item.createdBy;
      delete item.updatedBy;
      delete item.nome;
      item.icone = parseImage(item.icone);
      return item;
    });
    delete entity.id;
    delete entity.createdAt;
    delete entity.updatedAt;
    return { ...entity, estelar: estelar };
  },
}));
