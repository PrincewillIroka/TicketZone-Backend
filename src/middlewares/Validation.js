import schema from "../utils/schema";
import { extractErrorsMessages } from "../utils/helpers/ResponseHelper";

export function genericValidator(payload, param) {
  let result = {};
  const validation = schema[param]
    ? schema[param].validate(payload, {
        abortEarly: false,
        convert: true,
      })
    : {};
  if (validation.error) {
    result.errors = extractErrorsMessages(validation);
  }
  return result;
}
