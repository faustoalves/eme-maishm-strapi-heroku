const apiType = "api::home.home";

import { factories } from "@strapi/strapi";
import { getAllCitiesByState } from "../../../collections/cidades";
import { getCardsCustomList } from "../../../collections/empreendimentos";
import { getEstelar } from "../../../collections/estelar";
import { parseImage } from "../../../parses/common/image";
import { parseSeo } from "../../../parses/common/seo";
import { parseCTA } from "../../../parses/cta";

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
        empreendimentos: {
          populate: "*",
        },
      },
    });
    let listaEmpreendimetos = await getCardsCustomList(
      entity.empreendimentos,
      strapi,
    );
    entity.seo = parseSeo(entity.seo);
    entity.banner.lista = entity.banner.lista.map((item) => {
      item.mobileImage = parseImage(item.mobileImage);
      item.desktopImage = parseImage(item.desktopImage);
      return item;
    });
    let cidades = await getAllCitiesByState(strapi);
    let estelar = await getEstelar(strapi);
    entity.ctas = entity.ctas.map((item) => parseCTA(item));
    // if (entity.empreendimentos.length > 4) {
    //   entity.empreendimentos = entity.empreendimentos.slice(0, 4);
    // }
    delete entity.id;
    delete entity.createdAt;
    delete entity.updatedAt;
    return {
      ...entity,
      estelar: estelar,
      empreendimentos: listaEmpreendimetos,
      ondeMorar: { ...entity.ondeMorar, cidades: cidades },
    };
  },
}));
