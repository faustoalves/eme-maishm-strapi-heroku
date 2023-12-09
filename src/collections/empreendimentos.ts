import { parseEmpreendimento } from "./../parses/empreendimento";
export const getEmpreendimentosList = async (filter, strapi) => {
  let entities = await strapi.entityService.findMany(
    "api::empreendimento.empreendimento",
    {
      filters: filter,
      populate: "deep",
    }
  );
  entities = entities.map((entity) => parseEmpreendimento(entity));
  return entities as any[];
};
