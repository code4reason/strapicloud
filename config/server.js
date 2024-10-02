module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  logger: {
    config: {
      level: "debug",
    },
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
});
