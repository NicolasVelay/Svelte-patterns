export const getTitle = (value: string) => {
  return value.split("\n")[0].replace(/#/g, "");
};
