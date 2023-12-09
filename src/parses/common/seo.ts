import { parseImage } from "./image";

export const parseSeo = (seo) => {
  return {
    title: seo.title,
    description: seo.description,
    canonical: seo.canonical,
    indexFollow: seo.indexFollow,
    shareImage: parseImage(seo.shareImage),
  };
};
