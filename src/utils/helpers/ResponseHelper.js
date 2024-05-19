export function extractErrorsMessages(val) {
  let message = {};
  for (const error of val.error.details) {
    message[error.path[0]] = error.message;
  }
  return message;
}

export function successMessage(title) {
  return { success: true, message: title };
}

export function successData(data) {
  return { success: true, payload: data };
}

export function updateData(payload = {}) {
  payload.status = "updated";
  return { success: true, payload };
}

export function errorMessage(title) {
  return { success: false, message: title };
}

export function errorData(data) {
  return { success: false, data };
}
