module.exports = {
  routes: [
    {
      method: "GET",
      path: "/politica",
      handler: "api::politica.politica.getContent",
    },
  ],
};
