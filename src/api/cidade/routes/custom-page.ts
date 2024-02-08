module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cidade/listaCidades",
      handler: "api::cidade.cidade.getCitiesByState",
    },
  ],
};
