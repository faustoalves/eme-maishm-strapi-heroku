import { GetKeys, GetValues } from "@strapi/types/dist/types/core/attributes";
import { parseImage } from "./common/image";

export const parseCTA = (
  cta: GetValues<"api::cta.cta", GetKeys<"api::cta.cta">>,
) => {
  delete cta.createdAt;
  delete cta.updatedAt;
  delete cta.createdBy;
  delete cta.updatedBy;
  delete cta.nome;
  cta.icone = parseImage(cta.icone);
  return cta;
};
