import { getCategories, getEvents, getEventsCategory } from "../controllers";
import { genericValidator } from "../middlewares/Validation";
import { errorData } from "../utils/helpers/ResponseHelper";

const eventRoutes = [
  {
    method: "POST",
    path: "/api/events",
    config: getEvents,
  },
  {
    method: "GET",
    path: "/api/categories",
    config: getCategories,
  },
  {
    method: "POST",
    path: "/api/eventsCategory",
    config: getEventsCategory,
  },
];

export default eventRoutes;
