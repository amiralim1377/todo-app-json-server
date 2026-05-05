const isCompleted = (completed: boolean, width: number) => {
  const isCompleted = completed
    ? "Did it"
    : width < 500
      ? "Done"
      : "mark as Done";

  return isCompleted;
};

export { isCompleted };
