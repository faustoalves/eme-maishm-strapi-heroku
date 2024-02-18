import {
  GetNonPopulatableKeys,
  GetValues,
} from "@strapi/types/dist/types/core/attributes";
import { parseImage } from "../parses/common/image";
export const getEmpreendimentosList = async (filter, strapi) => {
  let entities: GetValues<
    "api::empreendimento.empreendimento",
    GetNonPopulatableKeys<"api::empreendimento.empreendimento">
  >[] = await strapi.entityService.findMany(
    "api::empreendimento.empreendimento",
    {
      filters: filter,
      populate: {
        seo: {
          populate: "*",
        },
      },
    },
  );
  return entities;
};

export const getCardsList = async (filter, strapi) => {
  let entities = await strapi.entityService.findMany(
    "api::empreendimento.empreendimento",
    {
      filters: filter,
      populate: {
        cidade: {
          populate: {
            nome: "*",
            slug: "*",
          },
        },
        bairro: {
          populate: {
            nome: "*",
            slug: "*",
          },
        },
        banner: {
          populate: "*",
        },
        header: {
          populate: "*",
        },
        components: {
          populate: "*",
        },
      },
    },
  );
  return entities.map((entity) => {
    entity.banner.background = entity.banner?.background
      ? parseImage(entity.banner.background)
      : null;
    entity.banner.logoEmpreendimento = entity.banner?.logoEmpreendimento
      ? parseImage(entity.banner.logoEmpreendimento)
      : null;
    delete entity.createdAt;
    delete entity.updatedAt;
    delete entity.cidade.createdAt;
    delete entity.cidade.updatedAt;
    delete entity.bairro.createdAt;
    delete entity.bairro.updatedAt;
    delete entity.fotosTitulo;
    delete entity.plantasTitulo;
    delete entity.nomeBreadcrumb;
    return entity;
  });
};
export const getCardsCustomList = async (filter, strapi) => {
  let entities = await strapi.entityService.findMany(
    "api::empreendimento.empreendimento",
    {
      populate: {
        cidade: {
          populate: {
            nome: "*",
            slug: "*",
          },
        },
        bairro: {
          populate: {
            nome: "*",
            slug: "*",
          },
        },
        banner: {
          populate: "*",
        },
        header: {
          populate: "*",
        },
        components: {
          populate: "*",
        },
      },
    },
  );

  let filtered = filter.map((item) => {
    return entities.filter((i) => i.id === item.id)[0];
  });
  if (filtered.length > 4) {
    filtered = filtered.slice(0, 4);
  }
  let ret = {
    items: [
      {
        tipoEmpreendimento: "apartamento",
        items: entities.filter((i) => i.tipoEmpreendimento === "apartamento")
          .length,
      },
      {
        tipoEmpreendimento: "casa",
        items: entities.filter((i) => i.tipoEmpreendimento === "casa").length,
      },
      {
        tipoEmpreendimento: "terreno",
        items: entities.filter((i) => i.tipoEmpreendimento === "terreno")
          .length,
      },
    ],
    lista: filtered.map((entity) => {
      entity.banner.background = entity.banner?.background
        ? parseImage(entity.banner.background)
        : null;
      entity.banner.logoEmpreendimento = entity.banner?.logoEmpreendimento
        ? parseImage(entity.banner.logoEmpreendimento)
        : null;
      delete entity.createdAt;
      delete entity.updatedAt;
      delete entity.cidade.createdAt;
      delete entity.cidade.updatedAt;
      delete entity.bairro.createdAt;
      delete entity.bairro.updatedAt;
      delete entity.fotosTitulo;
      delete entity.plantasTitulo;
      delete entity.nomeBreadcrumb;
      return entity;
    }),
  };
  return ret;
};
