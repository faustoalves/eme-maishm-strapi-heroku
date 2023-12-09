module.exports = {
  routes: [
    {
      method: "GET",
      path: "/mcmv",
      handler: "api::mcmv.mcmv.getContent",
    },
  ],
};
