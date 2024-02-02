"use client"
import { Bar} from "react-chartjs-2";
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

const BarChart = ({data, options}) => {
  return (
    <div className="chart">
      <Bar data={data} options={options}/>
    </div>
  )
}

export default BarChart