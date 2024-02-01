"use client";

import { useEffect, useState } from "react";
import DoughnutChart from "@/components/DoughnutChart";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import filterCategoryExpenses from "@/utils/filterCategoryExpenses";
import Expenses from "@/components/Expenses";
import Home from "@/components/Home";
import { monthsList } from "@/utils/monthsList";
import { categoryList } from "@/utils/categoryList";
import { set } from "mongoose";

const page = () => {
  const { data: session } = useSession();
  const options={
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
        color: "#fff",
      },
    },
  }
  const date = new Date();
  const currMonth = date.getMonth();
  const currYear = date.getFullYear();

  const [doughnutChartData, setDoughnutChartData] = useState({ datasets: [] });
  const [doughnutChartOptions, setDoughnutChartOptions] = useState({});

  const [totalExpense, setTotalExpense] = useState(0);

  const [expenses, setExpenses] = useState([]);

  const [month, setMonth] = useState(
    new Date().toLocaleString("default", { month: "short" })
  );
  const [fullMonth, setFullMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  const [day, setDay] = useState(new Date().getDate());

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
          setExpenses(() => {
            return [...currexpenses];
          });
          const arr1 = filterCategoryExpenses(currexpenses, fullMonth);
          setDoughnutChartData({
            labels: categoryList,
            datasets: [
              {
                label: "₹",
                data: arr1.arr,
                backgroundColor: [
                  "#f94144",
                  "#f8961e",
                  "#f9c74f",
                  "#43aa8b",
                  "#4d908e",
                  "#277da1",
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
    setDoughnutChartOptions(options);
  }, [session,fullMonth]);

  const handleChange = (e) => {
    setFullMonth(e.target.value);
  }

  return (
    <>
      {session && (
        <section className="snap-y w-4/5 m-auto">
          <div className="grid grid-cols-2 px-5 py-3 gap-10 snap-center">
            <div className="flex flex-col gap-2 h-screen">
              <div className="card text-center">
                Total Amount Spent in {`${fullMonth.slice(0,3)}`} :{" "}
                <span className="font-bold">₹ {totalExpense}</span>{" "}
              </div>
              <DoughnutChart
                data={doughnutChartData}
                options={doughnutChartOptions}
              />
              <div className="card flex gap-2 justify-center">
                <select value={currYear} className="inp" name="years">
                  <option value={2023}>2023</option>
                </select>
                <select value={fullMonth} className="inp" name="months" onChange={handleChange}>
                  {monthsList.map(
                    (month, index) =>
                      index <= currMonth && (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      )
                  )}
                </select>
              </div>
            </div>
            <Expenses expenses={expenses} month={fullMonth} />
          </div>
        </section>
      )}
      {!session && <Home />}
    </>
  );
};

export default page;
