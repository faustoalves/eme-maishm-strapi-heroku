/**
 * cidade controller
 */

import { factories } from "@strapi/strapi";
import _ from "lodash";

export default factories.createCoreController(
  "api::cidade.cidade",
  ({ strapi }) => ({
    async getCitiesByState(ctx) {
      let cities = await strapi.entityService.findMany("api::cidade.cidade", {
        sort: {
          cidade: "asc",
        },
      });
      cities = cities.map((c) => {
        delete c.createdAt;
        delete c.updatedAt;
        return c;
      });
      let grouped = _.groupBy(cities, (city) => city.estado);

      let ret = [
        {
          estado: "Minas Gerais",
          sigla: "MG",
          cidades: grouped.MG,
        },
        {
          estado: "São Paulo",
          sigla: "SP",
          cidades: grouped.SP,
        },
      ];

      return ret;
    },
  }),
);
