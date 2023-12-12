export const getEstelar = async (strapi) => {
  let component = await strapi
    .query("api::estelar.estelar")
    .findOne({ where: { id: 1 }, populate: { images: true } });

  delete component.id;
  delete component.createdAt;
  delete component.updatedAt;

  return component;
};
