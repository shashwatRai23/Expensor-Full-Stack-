"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import ExpenseTable from "@/components/ExpenseTable";

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
    <div className="px-3 ">
      <h1 className="mt-5 font-bold text-black text-2xl text-violet-500">
        Welcome {session?.user.email}
      </h1>
      <p className="mt-2 text text-neutral-500">Here you can see edit all your expenses...</p>
      <ExpenseTable expenses={allExpenses}/>
    </div>
  );
};

export default Profile;
