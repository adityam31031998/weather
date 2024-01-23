import React from "react";
import "../componentCss/SearchLocation.css";
const Temperature = ({ temperDate, weatherIcon, setSelectedTemp }) => {
  function handleWeatherIcon(icon) {
    const iconUrl = weatherIcon[icon];
    if (iconUrl) {
      return <img src={iconUrl} className="weathericons" alt="" />;
    }
    return null;
  }
  function hanldeSelectedTemp(date) {
    console.log(date);
  }
  return (
    <div className="days">
      <div className="datelist">
        {temperDate?.hourly?.map((data, index) => (
          <div key={index}>
            {/* {console.log(data)} */}
            {console.log(new Date(data.dt * 1000).toLocaleTimeString())}
            {/* {console.log(new Date(data.dt * 1000).toLocaleDateString())} */}
          </div>
        ))}
        {temperDate?.daily?.map((date, index) => (
          <div
            onClick={() => hanldeSelectedTemp(date)}
            className="currentDate"
            key={index}
          >
            {new Date(date.dt * 1000).toLocaleDateString(undefined, {
              weekday: "long",
            })}
            <div className="maxTemperature">
              <span>{Math.round(date.temp.min)}&deg;C</span>
              <span> {Math.round(date.temp.max)}&deg;C</span>
            </div>
            {handleWeatherIcon(date.weather?.[0]?.description)}
            <p>{date.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Temperature;
