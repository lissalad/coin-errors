import data from "./pennies.json";

const allErrorTypes = data.map((penny) => penny.error);
const errorSet = new Set(allErrorTypes);
const errorTypes = Array.from(errorSet);

const sortOldest = data.sort((a, b) => {
  return a.year - b.year;
});

const sortNewest = data.sort((a, b) => {
  return b.year - a.year;
});

export default data;

export { errorTypes, sortOldest, sortNewest };
