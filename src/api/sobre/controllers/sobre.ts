const apiType = "api::sobre.sobre";

import { factories } from "@strapi/strapi";
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
        historia: {
          populate: {
            fatos: {
              populate: "*",
            },
          },
        },
        ondeEstamos: {
          populate: "*",
        },
        tecnologia: {
          populate: "*",
        },
        sustentabilidade: {
          populate: {
            itens: {
              populate: "*",
            },
          },
        },
        meioAmbiente: {
          populate: {
            lista: {
              populate: "*",
            },
          },
        },
        premios: {
          populate: {
            lista: {
              populate: "*",
            },
          },
        },
      },
    });
    entity.seo = parseSeo(entity.seo);
    entity.banner.imagem = parseImage(entity.banner.imagem);
    entity.historia.fatos = entity.historia.fatos.map((fato) => {
      fato.imagem = parseImage(fato.imagem);
      return fato;
    });
    entity.ondeEstamos.imagem = parseImage(entity.ondeEstamos.imagem);
    entity.tecnologia.imagem = parseImage(entity.tecnologia.imagem);
    entity.sustentabilidade.itens = entity.sustentabilidade.itens.map(
      (item) => {
        item.imagem = parseImage(item.imagem);
        return item;
      },
    );
    entity.meioAmbiente.lista = entity.meioAmbiente.lista.map((item) => {
      item.imagem = parseImage(item.imagem);
      return item;
    });
    entity.premios.lista = entity.premios.lista.map((item) => {
      item.imagem = parseImage(item.imagem);
      return item;
    });
    delete entity.id;
    delete entity.createdAt;
    delete entity.updatedAt;
    return entity;
  },
}));
