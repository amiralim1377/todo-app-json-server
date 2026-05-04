function getTimeDifference(futureTime: string) {
  const now = new Date().getTime();
  const future = new Date(futureTime).getTime();

  const diffMs = future - now;

  if (diffMs <= 0) return "Time already passed";

  const diffSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(diffSeconds / (60 * 60 * 24));
  const hours = Math.floor((diffSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diffSeconds % (60 * 60)) / 60);
  const seconds = diffSeconds % 60;

  // Format output intelligently
  if (days > 0) return `${days} day(s), ${hours} hour(s), ${minutes} minute(s)`;
  if (hours > 0)
    return `${hours} hour(s), ${minutes} minute(s), ${seconds} second(s)`;
  if (minutes > 0) return `${minutes} minute(s), ${seconds} second(s)`;
  return `${seconds} second(s)`;
}

export { getTimeDifference };
