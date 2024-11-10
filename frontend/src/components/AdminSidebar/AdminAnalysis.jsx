import React, { useEffect, useState } from "react";
import { fetchSearchTerms } from "../../api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminAnalysis = ({
  current,
  setCurrent,
  isCollapsed,
  setIsCollapsed,
}) => {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const getTerms = async () => {
      const data = await fetchSearchTerms();
      setTerms(data);
    };
    getTerms();
  }, []);

  const chartData = {
    labels: terms.map((term) => term.term), // X-axis labels
    datasets: [
      {
        label: "Search Frequency",
        data: terms.map((term) => term.count), // Assuming each term document has a count field
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <>
      
        <div className={current === "Analysis" ? "m-10 h-96 w-full" : "hidden"}>
          <Bar data={chartData} />
        </div>
      
    </>
  );
};

export default AdminAnalysis;
