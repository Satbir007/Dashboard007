import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import "../../css/main.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

const BarChart = () => {
  const data = {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        label: "Average Ship",
        data: [
          2, 6, 5, 4, 3, 2, 1, -1, -2, -3, -4, -2, -3, -2, -1, -1, 2, 6, 4, 6,
          4,
        ],
        backgroundColor: [
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#dc3545",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
          "#0dcaf0",
        ],

        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      datalabels: {
        display: true,
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: {
          size: 8,
        },
      },
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },

      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <Container className=" barGraphHeight d-flex justify-content-center">
      <Bar data={data} options={options}></Bar>
    </Container>
  );
};

export default BarChart;
