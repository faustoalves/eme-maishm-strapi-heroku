import { GetKeys, GetValues } from "@strapi/types/dist/types/core/attributes";
import { parseImage } from "./image";

export const parseSeo = (
  seo: GetValues<"common.seo", GetKeys<"common.seo">>,
) => {
  seo.shareImage = parseImage(seo.shareImage);
  return seo;
};
