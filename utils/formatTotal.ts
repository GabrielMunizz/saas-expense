const formatTotal = (total: number): string => {
  if (total < 0) {
    return "text-red-500";
  }
  if (total === 0) {
    return "";
  }
  return "text-green-500";
};

export default formatTotal;
