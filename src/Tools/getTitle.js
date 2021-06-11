export const getTitle = (value) => {
  return value.split("\n")[0].replace(/#/g, "");
};
