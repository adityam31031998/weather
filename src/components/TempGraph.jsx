import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const TempGraph = ({ selectedTemp }) => {
  useEffect(() => {
    console.log("Selected Temperature in App:", selectedTemp);
  }, [selectedTemp]);

  const chartData = [
    { dt: 1705939200, temp: 1.01 },
    { dt: 1705942401, temp: 5.77 },
    { dt: 1705942905, temp: 33.77 },
  ];
  const options = {
    chart: {
      id: "temperature-chart",
    },
    yaxis: {
      type: "datetime",
    },
    xaxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
  };

  const series = [
    {
      name: "Temperature",
      data: chartData.map(({ dt, temp }) => [dt * 1000, temp]),
    },
  ];
  return (
    <div>
      {/* <p>{console.log("s",selectedTemp)}</p> */}

      <Chart options={options} series={series} type="line" width="500" />
    </div>
  );
};

export default TempGraph;
