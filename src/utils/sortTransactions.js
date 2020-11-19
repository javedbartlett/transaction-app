export const sortTransactions = (type, array) => {
  switch (type) {
    case "dateDesc":
      return [...array].sort((a, b) => new Date(b.date) - new Date(a.date));
    case "dateAsc":
      return [...array].sort((a, b) => new Date(a.date) - new Date(b.date));
    case "amountDesc":
      return [...array].sort((a, b) => b.amount - a.amount);
    case "amountAsc":
      return [...array].sort((a, b) => a.amount - b.amount);
    default:
      return array;
  }
};
