import React from "react";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const Expenses = ({ expenses,month }) => {
  return (
    <div className="flex flex-col gap-4 h-screen overflow-auto expenses flex-1">
      {expenses.map((expense, index) => {
        const expenseDate = new Date(expense.date);
        const expenseMonth = expenseDate.toLocaleString("default", { month: "long" });
        // const currMonth = currDate.toLocaleString("default", { month: "short" });
        const expenseDay = expenseDate.getDate();
        if(month!==expenseMonth)return;
        return (
          <div
            key={index}
            className="card flex items-center justify-between p-2 "
          >
            <div className="flex gap-3 items-center text-white">
              <CurrencyExchangeIcon className="text-green-400 "/>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 text-violet-500">
                  <div className="rounded-full bg-neutral-900 px-3 py-1">{`${expenseMonth.slice(0,3)} ${expenseDay}`}</div>
                  <div className="rounded-full bg-neutral-900 px-3 py-1">
                    {expense.category}
                  </div>
                </div>
                <p className="px-2">{expense.name}</p>
              </div>
            </div>
            <div className="card-body flex gap-2 flex-col text-white">
              <p>Your Share</p>
              <p>₹ {expense.amount}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Expenses;
