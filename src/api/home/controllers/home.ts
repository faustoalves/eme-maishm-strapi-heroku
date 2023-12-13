const apiType = "api::home.home";

import { factories } from "@strapi/strapi";
import _ from "lodash";
import { getAllCitiesByState } from "../../../collections/cidades";
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
      },
    });
    entity.seo = parseSeo(entity.seo);
    entity.banner.lista = entity.banner.lista.map((item) => {
      item.mobileImage = parseImage(item.mobileImage);
      item.desktopImage = parseImage(item.desktopImage);
      return item;
    });
    let cidades = await getAllCitiesByState(strapi);
    let estelar = await getEstelar(strapi);
    entity.ctas = entity.ctas.map((item) => parseCTA(item));
    delete entity.id;
    delete entity.createdAt;
    delete entity.updatedAt;
    return _.merge(
      entity,
      { estelar: estelar },
      { ondeMorar: { cidades: cidades } },
    );
  },
}));
