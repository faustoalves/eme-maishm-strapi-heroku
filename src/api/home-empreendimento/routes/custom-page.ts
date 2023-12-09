module.exports = {
  routes: [
    {
      method: "GET",
      path: "/home-empreendimento",
      handler: "api::home-empreendimento.home-empreendimento.getContent",
    },
  ],
};
