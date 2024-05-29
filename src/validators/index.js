import Joi from "@hapi/joi";

export const getEventsData = Joi.object({
  searchParam: Joi.string().allow(""),
});

export const getEventsCategoryData = Joi.object({
  alias: Joi.string().optional(),
});

export const loginData = Joi.object({
  email: Joi.string().trim(),
  password: Joi.string().trim(),
});

export const signUpData = Joi.object({
  email: Joi.string().trim(),
  password: Joi.string().trim(),
});
