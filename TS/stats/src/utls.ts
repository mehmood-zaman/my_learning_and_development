export const dateStringToDate = (date: string): Date => {
  const dateParts = date.split("/").map((element: string): number => {
    return parseInt(element);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[1]);
};
