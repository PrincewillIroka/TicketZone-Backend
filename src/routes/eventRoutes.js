import { getCategories, getEvents } from "../controllers";

const eventRoutes = [
  {
    method: "GET",
    path: "/api/events",
    config: getEvents,
  },
  {
    method: "GET",
    path: "/api/categories",
    config: getCategories,
  },
];

export default eventRoutes;
