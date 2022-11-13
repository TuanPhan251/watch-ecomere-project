import React from "react";
import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-moment";
function ChartInfo(props) {
  const chartRef = useRef(null);
  const { dataChart } = props;
  const [chartInstance, setChartInstance] = useState(null);
  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  useEffect(() => {
    const newChartInstance = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            type: "line",
            label: "Tuần hiện tại",
            data: [2, 6, 8, 4, 6, 9, 6, 8],
            parsing: {
              yAxisKey: "value",
              xAxisKey: "ts",
            },
            backgroundColor: "red",
            yAxisID: "y",
            borderColor: "red",
          },
          {
            type: "line",
            label: "Tuần trước",
            data: [2, 5, 2, 4, 7, 8, 5, 4],
            parsing: {
              yAxisKey: "value",
              xAxisKey: "ts",
            },
            backgroundColor: "blue",
            yAxisID: "y",
            borderColor: "blue",
          },
        ],
      },
      options: {
        interaction: {
          mode: "index",
          intersect: false,
        },
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0,
          },
          line: {
            borderWidth: 1,
            tension: 0.2,
          },
        },
      },
    });
    // setChartInstance(newChartInstance);
    // return () => {
    //   newChartInstance.destroy();
    // };
  }, []);

  // React.useEffect(() => {
  //   if (chartInstance) {
  //     updateDataset(dataChart);
  //   }
  // }, [dataChart]);

  // const updateDataset = (dataChart) => {
  //   chartInstance.data.datasets[0].data = dataChart;
  //   chartInstance.update();
  // };

  return (
    <>
      <div style={{ width: "100%", marginTop: 20 }}>
        <canvas ref={chartRef} style={{ height: 300 }}></canvas>
      </div>
    </>
  );
}

export default ChartInfo;
