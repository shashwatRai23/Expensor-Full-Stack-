"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const Profile = () => {
  const { data: session } = useSession();
  const [allExpenses, setAllExpenses] = useState([]);
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        // console.log(session.user.email);
        const res = await fetch("/api/expense", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: session?.user.email,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const expenses = data.expenses;
          setAllExpenses(expenses);
          console.log(expenses);
        }
      } catch (e) {
        toast.error(e.message);
      }
    };

    if (session) {
      fetchExpenses();
    }
  }, [session]);

  return (
    <div className="p-2">
      <h1 className="mt-5 font-bold text-black text-2xl">
        Welcome {session?.user.email}
      </h1>
      <p className="mt-2 text-xl">Here you can see edit all your expenses</p>
      <div>
        {allExpenses.map((expense) => {
          const dateString = expense.date;
          const date=new Date(dateString);
          const year=date.getFullYear();
          const month=date.getMonth();
          const day=date.getDay();
          return (
            <div className="flex gap-2">
              <span>{expense.name}</span>
              <span>{expense.amount}</span>
              <span>{`${day}-${month+1}-${year}`}</span>
              <span>{expense.category}</span>
            </div>
          );
        })}
      </div>
      {/* <h2 className='head_text'>Here You can see edit all your Expenses</h2> */}
    </div>
  );
};

export default Profile;
