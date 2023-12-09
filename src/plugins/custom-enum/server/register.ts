import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: "custom-enum",
    plugin: "custom-enum",
    type: "string",
  });
};
