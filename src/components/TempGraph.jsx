import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const TempGraph = ({ selectedTemp, temperDate }) => {
  const [selectedTempData, setSelectedData] = useState({});
  const [showTempHour, setshowTempHour] = useState(null);

  useEffect(() => {
    const handleSelectedTemp = () => {
      for (let data in temperDate?.daily) {
        try {
          if (selectedTemp?.dt === temperDate?.daily[data]?.dt) {
            setshowTempHour(temperDate?.hourly);
            setSelectedData(temperDate);
          }
        } catch (error) {
          console.log("data not fetch", error.message);
        }
      }
    };

    handleSelectedTemp();
  }, [selectedTemp, temperDate]);

  const options = {
    chart: {
      id: "temperature-chart",
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      title: {
        text: "Temperature (°C)",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
    },
  };

  console.log(showTempHour);
  const series = [
    {
      name: "Temperature",
      data: showTempHour
        ? showTempHour.map(({ dt, temp }) => [
            new Date(dt * 1000).getHours(),
            temp,
          ])
        : [],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="area" width="500" />
    </div>
  );
};

export default TempGraph;
