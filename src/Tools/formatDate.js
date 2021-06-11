export const formatDate = (value) => {
  const date = new Date(value);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    months[date.getUTCMonth()] +
    " " +
    date.getUTCDate() +
    ", " +
    date.getUTCFullYear()
  );
};
