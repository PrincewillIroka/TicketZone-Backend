import { login, signup } from "../controllers";

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
    config: login,
  },
  {
    method: "PUT",
    path: "/api/signup",
    config: signup,
  },
];

export default userRoutes;
