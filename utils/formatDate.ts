const formatDate = (date: Date) => {
  const formatDate = Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
  const weekDayUpperCase =
    formatDate.charAt(0).toUpperCase() + formatDate.slice(1);
  return weekDayUpperCase;
};

export default formatDate;
