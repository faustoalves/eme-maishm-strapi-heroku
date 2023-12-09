module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sobre",
      handler: "api::sobre.sobre.getContent",
    },
  ],
};
