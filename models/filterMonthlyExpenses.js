const filterMonthlyExpenses = (expenses, year) => {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  expenses.map((expense) => {
        const dateString = expense.date;
        const date = new Date(dateString);
        const month=date.getMonth();
    if (date.getFullYear() === year) {
      arr[month] += expense.amount;
    }
  });
  return arr;
};

export default filterMonthlyExpenses;
