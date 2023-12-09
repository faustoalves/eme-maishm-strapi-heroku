module.exports = {
  routes: [
    {
      method: "GET",
      path: "/demonstrativo-financeiro",
      handler:
        "api::demonstrativo-financeiro.demonstrativo-financeiro.getContent",
    },
  ],
};
