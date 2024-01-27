export default {
  routes: [
    {
      method: "GET",
      path: "/bot",
      handler: "bot.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
