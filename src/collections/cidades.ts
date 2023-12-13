import _ from "lodash";

export const getAllCitiesByState = async (strapi) => {
  let component = await strapi.query("api::cidade.cidade").findMany();
  component = component.map((c) => {
    delete c.createdAt;
    delete c.updatedAt;
    return c;
  });
  var grouped = _.mapValues(_.groupBy(component, "estado"), (clist) =>
    clist.map((item) => _.omit(item, "estado")),
  );
  return grouped;
};
