const dueDateString = (date: Date) => {
  const localDate = new Date(date);

  const dueDateString = localDate.toISOString().split("T")[0];

  return dueDateString;
};

export { dueDateString };
