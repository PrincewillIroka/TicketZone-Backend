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

export const getUserEventsData = Joi.object({
  userId: Joi.string().trim(),
  page: Joi.number(),
  limit: Joi.number(),
});

export const buyTicketsData = Joi.object({
  eventId: Joi.string().trim(),
  buyerId: Joi.string().trim(),
  quantityOfTicketsToBuy: Joi.number().integer().min(1),
});
