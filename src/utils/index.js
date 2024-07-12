export function generateUniqueTicketLabels(num) {
  return new Array(num).fill(new Date().valueOf());
}

export { generateUniqueTicketLabels };
