import User from "../models/User";

const login = {
  handler: async (request, h) => {
    try {
      const { email, password } = request.payload;
      const user = await User.findOne({ email });
      return h.response({ success: true, data: user }).code(200);
    } catch (error) {
      console.error("Login error:", error);
      return h.response(errorData("Oops something went wrong!")).code(500);
    }
  },
};

export { login };
