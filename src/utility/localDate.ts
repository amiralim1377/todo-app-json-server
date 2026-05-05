const localDate = (dueDate: string) => {
  const localDate = new Date(`${dueDate}T23:59:59`);

  return localDate;
};

export { localDate };
