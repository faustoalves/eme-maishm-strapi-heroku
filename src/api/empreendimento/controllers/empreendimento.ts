import { factories } from "@strapi/strapi";
import { getEmpreendimentosList } from "../../../collections/empreendimentos";
import { parseCardEmpreendimento } from "../../../parses/empreendimento";
const { createCoreController } = require("@strapi/strapi").factories;

export default factories.createCoreController(
  "api::empreendimento.empreendimento",
  ({ strapi }) => ({
    async getAll(ctx) {
      let { key } = ctx.query;
      let city = await strapi.entityService.findMany("api::cidade.cidade", {
        filters: {
          slug: {
            $eqi: "campinas",
          },
        },
      });
      if (city.length === 0) {
        return {};
      }

      let entities = await getEmpreendimentosList({}, strapi).then(
        (entities) => {
          return entities.map((entity) => {
            return parseCardEmpreendimento(entity);
          });
        }
      );
      return entities;
    },
    async getByFilter(ctx) {
      let { cidade, tipo, status, venda } = ctx.query;
      let filter: any = {};
      if (cidade) {
        let city = await strapi.entityService.findMany("api::cidade.cidade", {
          filters: {
            slug: {
              $eqi: cidade,
            },
          },
        });
        if (city.length === 0) {
          return {};
        }
        filter.cidade = city[0].id;
      }
      if (tipo) filter.tipoEmpreendimento = tipo;
      if (status) filter.statusObra = status;
      if (venda) filter.statusVenda = venda;
      let entities = await getEmpreendimentosList(filter, strapi).then(
        (entities) => {
          return entities.map((entity) => {
            return parseCardEmpreendimento(entity);
          });
        }
      );
      return entities;
    },
    async getBySlug(ctx) {
      let { slug } = ctx.query;
      let entities = await getEmpreendimentosList({ slug }, strapi);
      return entities;
    },
  })
);
