import {
  getCategories,
  getEvents,
  getEventsCategory,
  createEvent,
} from "../controllers";
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
    handler: getCategories,
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
  {
    method: "POST",
    path: "/api/createEvent",
    handler: createEvent,
  },
];

export default eventRoutes;
