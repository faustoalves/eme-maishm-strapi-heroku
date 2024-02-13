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
        emeTransformacao: {
          populate: "*",
        },
        estelarTransformacao: {
          populate: "*",
        },
      },
    });
    entity.seo = parseSeo(entity.seo);
    entity.banner.desktopBackground = parseImage(
      entity.banner.desktopBackground
    );
    entity.ondeEstamos.desktopBackground = parseImage(
      entity.ondeEstamos.desktopBackground
    );
    entity.tecnologia.desktopBackground = parseImage(
      entity.tecnologia.desktopBackground
    );

    entity.banner.mobileBackground = parseImage(entity.banner.mobileBackground);
    entity.ondeEstamos.mobileBackground = parseImage(
      entity.ondeEstamos.mobileBackground
    );
    entity.tecnologia.mobileBackground = parseImage(
      entity.tecnologia.mobileBackground
    );

    entity.historia.fatos = entity.historia.fatos.map((fato) => {
      fato.imagem = parseImage(fato.imagem);
      return fato;
    });

    entity.sustentabilidade.itens = entity.sustentabilidade.itens.map(
      (item) => {
        item.imagem = parseImage(item.imagem);
        return item;
      }
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
