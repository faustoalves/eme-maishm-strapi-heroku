module.exports = {
  routes: [
    {
      method: "GET",
      path: "/perguntas-frequentes",
      handler: "api::perguntas-frequente.perguntas-frequente.getContent",
    },
  ],
};
