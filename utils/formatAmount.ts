export const formatAmount = (amount: string) => {
  const formattedAmount = amount
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".");
  return Number(formattedAmount);
};
