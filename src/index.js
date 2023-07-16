require("dotenv").config();
import Hapi from "@hapi/hapi";
import routes from "./routes";

const init = async () => {
  const server = Hapi.server({
    port: process.env.APP_PORT,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
