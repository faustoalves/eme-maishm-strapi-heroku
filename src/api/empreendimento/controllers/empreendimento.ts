import { factories } from "@strapi/strapi";
import {
  getCardsList,
  getEmpreendimentosList,
} from "../../../collections/empreendimentos";
import { getEstelar } from "../../../collections/estelar";
import { parseImage } from "../../../parses/common/image";
import { parseSeo } from "../../../parses/common/seo";
import { parseCTA } from "../../../parses/cta";
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
      let entities = await strapi.entityService.findMany(
        "api::empreendimento.empreendimento",
        {
          filters: { slug: slug },
        },
      );
      if (entities.length === 0) {
        return null;
      }
      let entity = await strapi.entityService.findOne(
        "api::empreendimento.empreendimento",
        entities[0].id,
        {
          populate: {
            seo: {
              populate: "*",
            },
            bot: {
              populate: "*",
            },
            cidade: {
              populate: "*",
            },
            bairro: {
              populate: "*",
            },
            banner: {
              populate: {
                iconesDestaques: {
                  populate: "*",
                },
                background: {
                  populate: "*",
                },
                logoEmpreendimento: {
                  populate: "*",
                },
              },
            },
            cta: {
              populate: "*",
            },
            fotosItens: {
              populate: {
                grupos: {
                  populate: "*",
                },
              },
            },
            plantasItem: {
              populate: "*",
            },
            financiamento: {
              populate: "*",
            },
            implantacao: {
              populate: "*",
            },
            localizacao: {
              populate: "*",
            },
            valoresStatusObra: {
              populate: "*",
            },
          },
        },
      );
      entity.seo = parseSeo(entity.seo);
      entity.cta = entity.cta ? parseCTA(entity.cta) : null;
      entity.banner.background = entity.banner.background
        ? parseImage(entity.banner.background)
        : null;
      entity.banner.logoEmpreendimento = entity.banner.logoEmpreendimento
        ? parseImage(entity.banner.logoEmpreendimento)
        : null;
      entity.fotosItens = entity.fotosItens.map((fotos) => {
        fotos.grupos = fotos.grupos.map((grupo) => {
          grupo.imagem = parseImage(grupo.imagem);
          return grupo;
        });
        return fotos;
      });
      entity.plantasItem = entity.plantasItem.map((item) => {
        item.imagem = parseImage(item.imagem);
        return item;
      });
      entity.implantacao.imagem = parseImage(entity.implantacao.imagem);
      entity.localizacao.imagem = parseImage(entity.localizacao.imagem);
      let estelar = await getEstelar(strapi);
      return { ...entity, estelar: estelar };
    },
  }),
);
