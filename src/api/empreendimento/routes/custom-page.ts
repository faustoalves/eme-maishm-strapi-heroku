module.exports = {
  routes: [
    {
      method: "GET",
      path: "/empreendimentos/todos",
      handler: "api::empreendimento.empreendimento.getAll",
    },
    {
      method: "GET",
      path: "/empreendimentos/filtro",
      handler: "api::empreendimento.empreendimento.getByFilter",
    },
    {
      method: "GET",
      path: "/empreendimento",
      handler: "api::empreendimento.empreendimento.getBySlug",
    },
  ],
};
