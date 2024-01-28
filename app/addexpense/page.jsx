"use client";

import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Addexpense = () => {
  const { data: session } = useSession();
  const router=useRouter();
  const options = [
    { value: "none", label: "Choose a category" },
    { value: "food", label: "Food" },
    { value: "cloth", label: "Cloth" },
    { value: "grocery", label: "Grocery" },
    { value: "travel", label: "Travel" },
    { value: "party", label: "Party" },
  ];
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState(options[0].value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, amount, date, category);
    try {
      const res = await fetch("/api/expense/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          amount: amount,
          date: date,
          category: category,
          user: session?.user.email,
        }),
      });
      if (res.ok) {
        toast.success("Expense Added Succesfully....");
        router.replace("/");
      } else {
        toast.error("Error in adding expense..");
      }
    } catch (e) {
      toast.error(e.message);
    }
    // setName("");
    // setAmount(0);
    // setDate("");
    // setCategory(options[0].value);
  };

  return (
    <section className="form_container">
      <h1 className="text-xl font-bold my-4">Add a Expense</h1>
      <form className="flex flex-col gap-3">
        <input
          className="inp"
          type="text"
          placeholder="Expense Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="inp"
          type="number"
          placeholder="Expense Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          className="inp"
          type="date"
          placeholder="Expense Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className="inp"
          name="Category"
          id="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="black_btn" onClick={handleSubmit}>
          Add Expense
        </button>
      </form>
    </section>
  );
};

export default Addexpense;
