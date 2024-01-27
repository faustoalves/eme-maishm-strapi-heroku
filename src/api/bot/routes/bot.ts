export default {
  routes: [
    {
      method: "GET",
      path: "/bot/cities",
      handler: "bot.getCities",
    },
    {
      method: "GET",
      path: "/bot/enterprises/:city",
      handler: "bot.getNeighbourhood",
    },
    {
      method: "GET",
      path: "/bot/enterprises/:city/:neighbourhood",
      handler: "bot.getEnterprises",
    },
    {
      method: "GET",
      path: "/bot/enterprise/:slug",
      handler: "bot.getEnterprise",
    },
  ],
};
