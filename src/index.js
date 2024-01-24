require("dotenv").config();
import Hapi from "@hapi/hapi";
import routes from "./routes";
import db from "./db";

const { APP_PORT, APP_FRONTEND, NODE_ENV } = process.env;

const init = async () => {
  const server = Hapi.server({
    port: APP_PORT,
    host: "localhost",
    routes: {
      cors: NODE_ENV === "development" ? true : { origin: [APP_FRONTEND] },
    },
  });

  server.route(routes);

  await server.start();
  await db.connect();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
