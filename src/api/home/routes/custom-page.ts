module.exports = {
  routes: [
    {
      method: "GET",
      path: "/home",
      handler: "api::home.home.getContent",
    },
  ],
};
