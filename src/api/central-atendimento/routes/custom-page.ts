module.exports = {
  routes: [
    {
      method: "GET",
      path: "/centralatendimento",
      handler: "api::central-atendimento.central-atendimento.getContent",
    },
  ],
};
