/**
 * A set of functions called "actions" for `bot`
 */
import { factories } from "@strapi/strapi";
import _ from "lodash";
import { parseImage } from "../../../parses/common/image";
import { parseSeo } from "../../../parses/common/seo";
import { parseCTA } from "../../../parses/cta";

export default factories.createCoreController(
  "api::empreendimento.empreendimento",
  ({ strapi }) => ({
    getCities: async (ctx, next) => {
      let { cidade, slug } = ctx.query;

      let cities = await strapi.entityService.findMany("api::cidade.cidade", {
        // filters: {
        //   slug: {
        //     $eqi: slug ? slug : "",
        //   },
        // },
        populate: {
          empreendimentos: {
            populate: {
              bairro: {
                populate: "*",
              },
            },
          },
        },
      });

      cities = cities.filter((item) => item.empreendimentos.length > 0);

      let ret = cities.map((c) => ({
        id: c.id,
        name: c.cidade,
        slug: c.slug,
        empreendimentos: c.empreendimentos.length,
      }));
      return {
        cities: ret,
      };
    },
    getNeighbourhood: async (ctx, next) => {
      let { city } = ctx.params;
      let enterprise = await strapi.entityService.findMany(
        "api::cidade.cidade",
        {
          filters: {
            slug: {
              $eqi: city ? city : "",
            },
          },
          populate: {
            empreendimentos: {
              populate: {
                bairro: {
                  populate: "*",
                },
              },
            },
          },
        },
      );
      if (enterprise.length === 0) {
        return {};
      }
      let neighbourhoods = enterprise[0].empreendimentos.map((item) => ({
        bairro: item.bairro.bairro,
        slug: item.bairro.slug,
      }));
      let unique = _.uniqWith(neighbourhoods, _.isEqual);
      let reorder = _.orderBy(unique, ["bairro"], ["asc"]);
      return {
        city: city,
        neighbourhood: reorder,
      };
    },
    getEnterprises: async (ctx, next) => {
      let { city, neighbourhood } = ctx.params;
      let enterprise = await strapi.entityService.findMany(
        "api::cidade.cidade",
        {
          filters: {
            slug: {
              $eqi: city ? city : "",
            },
          },
          populate: {
            empreendimentos: {
              populate: {
                bairro: {
                  populate: "*",
                },
              },
            },
          },
        },
      );
      if (enterprise.length === 0) {
        return {};
      }
      let neighbourhoods = enterprise[0].empreendimentos.filter(
        (item) => item.bairro.slug === neighbourhood,
      );
      let enterprises = neighbourhoods.map((item) => ({
        nome: item.nome,
        slug: item.slug,
      }));
      let reorder = _.orderBy(neighbourhoods, ["nome"], ["asc"]);
      return {
        city: city,
        neighbourhood: neighbourhood,
        enterprises: enterprises,
      };
    },
    getEnterprise: async (ctx, next) => {
      let { slug } = ctx.params;
      let enterprise = await strapi.entityService.findMany(
        "api::empreendimento.empreendimento",
        {
          filters: {
            slug: {
              $eqi: slug,
            },
          },
          populate: "*",
        },
      );
      console.log(enterprise);
      if (enterprise.length === 0) {
        return {};
      }
      let entity = await strapi.entityService.findOne(
        "api::empreendimento.empreendimento",
        enterprise[0].id,
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

      return {
        ...entity,
      };
    },
  }),
);
