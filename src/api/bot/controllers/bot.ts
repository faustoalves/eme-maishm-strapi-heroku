/**
 * A set of functions called "actions" for `bot`
 */

export default {
  exampleAction: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
