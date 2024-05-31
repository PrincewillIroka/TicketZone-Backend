import { getCategories, getEvents, getEventsCategory } from "../controllers";
import { getEventsData, getEventsCategoryData } from "../validators/index";

const eventRoutes = [
  {
    method: "POST",
    path: "/api/events",
    handler: getEvents,
    options: {
      validate: {
        payload: getEventsData,
      },
    },
  },
  {
    method: "POST",
    path: "/api/categories",
    config: getCategories,
  },
  {
    method: "POST",
    path: "/api/eventsCategory",
    handler: getEventsCategory,
    options: {
      validate: {
        payload: getEventsCategoryData,
      },
    },
  },
];

export default eventRoutes;
