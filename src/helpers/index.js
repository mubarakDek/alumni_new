export function isDatePassed(date) {
  let current = new Date();

  let passedDate = new Date(date);

  if (!isValidDate(passedDate)) {
    throw Error("please pass correct date");
  }

  return current.getTime() > passedDate.getTime();
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
