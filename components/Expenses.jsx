import React from "react";

const Expenses = ({ expenses }) => {
  return (
    <div className="w-5/6 flex flex-col gap-4 h-screen overflow-auto expenses px-5">
      {expenses.map((expense, index) => {
        const date = new Date(expense.date);
        const currDate=new Date();
        const month = date.toLocaleString("default", { month: "short" });
        const currMonth = currDate.toLocaleString("default", { month: "short" });
        const day = date.getDate();
        if(month!==currMonth)return;
        return (
          <div
            key={index}
            className="card flex items-center justify-between p-2 "
          >
            <div className="flex gap-3 items-center text-white">
              <div className="w-10 h-5 flex">
                <img className="" src="/assets/money.jpg" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 text-violet-700">
                  <div className="rounded-full bg-neutral-900 px-3 py-1">{`${month} ${day}`}</div>
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
