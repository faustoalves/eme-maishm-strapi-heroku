module.exports = {
  routes: [
    {
      method: "GET",
      path: "/navegacao/navbar",
      handler: "api::navegacao.navegacao.getNavbar",
    },
    {
      method: "GET",
      path: "/navegacao/footer",
      handler: "api::navegacao.navegacao.getFooter",
    },
  ],
};
