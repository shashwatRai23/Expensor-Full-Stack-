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

const backgroundColor = ["#b9fbc0","#98f5e1","#8eecf5","#90dbf4","#a3c4f3","#cfbaf0","#f1c0e8","#ffcfd2","#fde4cf","#fbf8cc","#b8b8ff","#9381ff"]

const Home = () => {
  const {data: session} = useSession();
  const [barChartData, setBarChartData] = useState({ datasets: [] });
  const [barChartOptions, setBarChartOptions] = useState({});

  const [doughnutChartData, setDoughnutChartData] = useState({ datasets: [] });
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({});

  
  useEffect(() => {
    
    const fetchExpenses=async()=>{
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
          const data=await res.json();
          const expenses=data.expenses;
          const d=new Date();
          const arr1=filterCategoryExpenses(expenses,d.getMonth()) ;
          const arr2=filterMonthlyExpenses(expenses, d.getFullYear());
          setDoughnutChartData({
            labels: ["Food", "Grocery", "Cloth", "Travel", "Party"],
            datasets: [
              {
                label: "₹",
                data: arr1,
                // borderColor: "#0",
                backgroundColor: ["#b9fbc0","#8eecf5","#a3c4f3","#f1c0e8","#fde4cf"],
              },
            ],
          });

          setBarChartData({
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct",  "Nov", "Dec"],
            datasets: [
              {
                label: "₹",
                data: arr2,
                // borderColor: "#0",
                backgroundColor: backgroundColor,
              },
            ],
          });
          toast.success("Expense Fetched Succesfully....");
        } else {
          toast.error("Error in adding expense..");
        }
      } catch (e) {
        toast.error(e.message);
      }
    }
    if(session)
    {
      fetchExpenses();
    }

    
    setBarChartOptions({
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Monthly expenses",
        },
      },
    });
    setDoughnutChartOptions({
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Expenses",
        },
      },
    });

    

  }, [session]);

  return (
    <section>
      <div className="flex mt-10 mb-20 justify-around mb-3 w-full p-3 items-center gap-10">
        <div>
          <Filter/>
        </div>
        <div className="w-2/3">
          <BarChart data={barChartData} options={barChartOptions} />
        </div>
      </div>
      <div className="flex justify-around mb-3 w-full p-3 items-center gap-10">
        <div className="w-1/2">
          <DoughnutChart data={doughnutChartData} options={doughnutChartOptions} />
        </div>
        <div>Doughnut chart</div>
      </div>
    </section>
  );
};

export default Home;
