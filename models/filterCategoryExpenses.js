const filterCategoryExpenses = (expenses, month) => {
  const arr = [0, 0, 0, 0, 0];

  expenses.map((expense) => {
    const dateString = expense.date;
    const date = new Date(dateString);
    const currMonth = date.getMonth();
    if (currMonth == month) {
      if (expense.category === "food") {
        arr[0] += expense.amount;
      } else if (expense.category === "grocery") {
        arr[1] += expense.amount;
      } else if (expense.category === "cloth") {
        arr[2] += expense.amount;
      } else if (expense.category === "travel") {
        arr[3] += expense.amount;
      } else if (expense.category === "party") {
        arr[4] += expense.amount;
      }
    }
  });
  return arr;
};

export default filterCategoryExpenses;
