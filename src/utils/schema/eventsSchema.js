import Joi from "@hapi/joi";

const eventsSchema = {
  addAdmin: Joi.object({
    username: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(2).required(),
    adminId: Joi.string().min(2).max(30).required(),
    role: Joi.string().min(2).max(10).optional(),
  }),
};

export default eventsSchema;
