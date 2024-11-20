export const formatBalance = (balance: number) => {
  const formattedBalance = balance.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedBalance;
};
