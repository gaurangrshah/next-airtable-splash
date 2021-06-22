export function removeNullValues(arr) {
  return arr?.map((obj) => {
    Object.keys(obj)?.forEach((key) => {
      if (isEmpty(obj[key])) delete obj[key];
    });
    return obj;
  });
}

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}
