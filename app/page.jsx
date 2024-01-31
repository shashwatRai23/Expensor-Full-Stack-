"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import BarChart from "@/components/BarChart";
import DoughnutChart from "@/components/DoughnutChart";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import filterCategoryExpenses from "@/models/filterCategoryExpenses";
import filterMonthlyExpenses from "@/models/filterMonthlyExpenses";
import Filter from "@/components/Filter";
import Expenses from "@/components/Expenses";
import Home from "@/components/Home";

const page = () => {
  const { data: session } = useSession();

  
  const [doughnutChartData, setDoughnutChartData] = useState({ datasets: [] });
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({});

  const [totalExpense, setTotalExpense] = useState(0);

  const [expenses, setExpenses] = useState([]);

  const [month,setMonth]=useState(new Date().toLocaleString("default",{month : "short"}));
  const [day,setDay]=useState(new Date().getDate());

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
          const currexpenses = data.expenses;
          setExpenses((prevState)=>{
            return [...currexpenses];
          })
          const d = new Date();
          const arr1 = filterCategoryExpenses(currexpenses, d.getMonth());
          const arr2 = filterMonthlyExpenses(currexpenses, d.getFullYear());
          setDoughnutChartData({
            labels: ["Food", "Grocery", "Cloth", "Travel", "Party"],
            datasets: [
              {
                label: "₹",
                data: arr1.arr,
                backgroundColor: [
                  "#b9fbc0",
                  "#8eecf5",
                  "#a3c4f3",
                  "#f1c0e8",
                  "#fde4cf",
                ],
              },
            ],
          });
          setTotalExpense(arr1.sum);
          // toast.success("Expense Fetched Succesfully....");
        } else {
          toast.error("Error in adding expense..");
        }
      } catch (e) {
        toast.error(e.message);
      }
    };
    if (session) {
      fetchExpenses();
    }

    setDoughnutChartOptions({
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        // colors:{
        //   forceOverride: true
        // },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Expenses",
          color: "#fff",
        },
      },
    });
  }, [session]);


  return (
    <section className="snap-y">
      <div className="h-screen flex justify-around w-full p-3 gap-10 snap-center">
        <div className="w-1/3 flex flex-col gap-2">
          <div className="card">
            Total Amount Spent from {`${month}-1 to ${month}-${day}`} :{" "}
            <span className="font-bold">₹ {totalExpense}</span>{" "}
          </div>
          <DoughnutChart
            data={doughnutChartData}
            options={doughnutChartOptions}
          />
          <div className="card flex gap-2 justify-center">
            <Filter filterby="year"/>
            <Filter filterby="month"/>
            <Filter filterby="date"/>
          </div>
        </div>
        <Expenses expenses={expenses}/>
      </div>
      <Home/>
    </section>
  );
};

export default page;
