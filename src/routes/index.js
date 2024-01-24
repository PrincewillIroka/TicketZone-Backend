import userRoutes from "./userRoutes";
import eventRoutes from "./eventRoutes";

let routes = [];
routes = [...userRoutes, ...eventRoutes];

export default routes;
