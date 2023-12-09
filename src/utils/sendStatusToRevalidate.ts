const axios = require("axios");

export const sendStatusToRevalidade = async (tag: string) => {
  console.log("\n\nRevalidating Tag: " + tag);
  await axios
    .get(`${process.env.SITE_API}/revalidate?tag=${tag}`)
    .then((res) => {
      return res.data;
    });
};
