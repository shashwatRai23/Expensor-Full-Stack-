"use client"

import React from "react";
import { useState, useEffect } from "react";
import filterMonthlyExpenses from "@/utils/filterMonthlyExpenses";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import BarChart from "@/components/BarChart";
import { monthsList } from "@/utils/monthsList";
const backgroundColor = [
    "#b9fbc0",
    "#98f5e1",
    "#8eecf5",
    "#90dbf4",
    "#a3c4f3",
    "#cfbaf0",
    "#f1c0e8",
    "#ffcfd2",
    "#fde4cf",
    "#fbf8cc",
    "#b8b8ff",
    "#9381ff",
  ];

const monthlyanalysis = () => {
  const { data: session } = useSession();

  const [barChartData, setBarChartData] = useState({ datasets: [] });
  const [barChartOptions, setBarChartOptions] = useState({});


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
          const d = new Date();

          const arr2 = filterMonthlyExpenses(currexpenses, d.getFullYear());
          setBarChartData({
            labels: monthsList,
            datasets: [
              {
                label: "₹",
                data: arr2,
                backgroundColor: backgroundColor,
              },
            ],
          });
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

    setBarChartOptions({
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            color: "#fff",
          },
        },
        x: {
          ticks: {
            color: "#fff",
          },
        },
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly expenses",
          color: "#fff",
        },
      },
    });
  }, [session]);
  return (
    <div className="flex justify-around w-full p-3 items-center gap-10 monthAnalysis">
      <div>
        <div className="text-2xl font-bold">Monthly Analysis</div>
        <div>Visulisation of Monthly expenses of this year</div>
      </div>
      <div className="w-2/3">
        <BarChart data={barChartData} options={barChartOptions} />
      </div>
    </div>
  );
};

export default monthlyanalysis;
