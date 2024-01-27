import User from "../models/User";

const login = {
  handler: async (request, h) => {
    try {
      const { email, password } = request.payload;
      const user = await User.verifyUser(email, password);
      return h.response({ success: true, data: user }).code(200);
    } catch (error) {
      console.error(error);
      return h.response({ success: false, message: error.message }).code(500);
    }
  },
};

const signup = {
  handler: async (request, h) => {
    try {
      const { email, password } = request.payload;
      const user = await User.addUser(email, password);
      return h.response({ success: true, data: user }).code(200);
    } catch (error) {
      console.error(error);
      return h.response({ success: false, message: error.message }).code(500);
    }
  },
};

export { login, signup };
