import { factories } from "@strapi/strapi";
import {
  getCardsList,
  getEmpreendimentosList,
} from "../../../collections/empreendimentos";
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
        },
      );
      return entities;
    },
    async getByFilter(ctx) {
      console.log("getByFilter");
      let { cidade, tipo, status, venda, bairro } = ctx.query;
      let filter: any = {};
      let searchKeys = [];
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
        searchKeys.push(city[0].cidade);
      }
      console.log(bairro);
      if (bairro) {
        let neighbor = await strapi.entityService.findMany(
          "api::bairro.bairro",
          {
            filters: {
              slug: {
                $eqi: bairro,
              },
            },
          },
        );
        if (neighbor.length === 0) {
          return {};
        }
        filter.bairro = neighbor[0].id;
        searchKeys.push(neighbor[0].bairro);
      }
      console.log(filter.bairro);
      if (tipo) {
        filter.tipoEmpreendimento = tipo;
        searchKeys.push(tipo);
      }
      if (status) {
        filter.statusObra = status;
        searchKeys.push(status);
      }
      if (venda) {
        filter.statusVenda = venda;
        searchKeys.push(venda);
      }
      let entities = await getCardsList(filter, strapi);
      return {
        terms: searchKeys,
        total: entities.length,
        entities: entities,
      };
    },
    async getBySlug(ctx) {
      let { slug } = ctx.query;
      let entities = await getEmpreendimentosList({ slug }, strapi);
      return entities;
    },
  }),
);
