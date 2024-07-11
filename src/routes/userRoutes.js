import { login, signUp, getUserEvents } from "../controllers";
import { loginData, signUpData, getUserEventsData } from "../validators/index";

const getAppHealth = {
  handler: async (request, h) => {
    try {
      return h
        .response({ success: true, health: "App is running healthy" })
        .code(200);
    } catch (error) {
      console.error("Get health error:", error);
      return h.response(errorData("Oops something went wrong!")).code(500);
    }
  },
};

const userRoutes = [
  {
    method: "GET",
    path: "/api/health",
    config: getAppHealth,
  },
  {
    method: "POST",
    path: "/api/login",
    handler: login,
    options: {
      validate: {
        payload: loginData,
      },
    },
  },
  {
    method: "PUT",
    path: "/api/signUp",
    handler: signUp,
    options: {
      validate: {
        payload: signUpData,
      },
    },
  },
  {
    method: "POST",
    path: "/api/getUserEvents",
    handler: getUserEvents,
    options: {
      validate: {
        payload: getUserEventsData,
      },
    },
  },
];

export default userRoutes;
