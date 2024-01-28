"use client"
import { Doughnut} from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js/auto";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  Legend
);

const DoughnutChart = ({data, options}) => {
  return (
    <Doughnut data={data} options={options}/>
  )
}

export default DoughnutChart;