import { parseImage } from "../parses/common/image";

export const getEmpreendimentosList = async (filter, strapi) => {
  let entities = await strapi.entityService.findMany(
    "api::empreendimento.empreendimento",
    {
      filters: filter,
      populate: "deep",
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
