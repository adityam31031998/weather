import React from "react";
import "../componentCss/TemperatureDetails.css";
import TempGraph from "./TempGraph";

const TemperatureDetails = ({
  locationResponse,
  weatherIcon,
  selectedTemp,
}) => {
  function getWeatherIcon() {
    let weatherIconApi = locationResponse?.weather?.[0]?.description;
    let weatherIconApiKey;
    for (let key in weatherIcon) {
      if (key === weatherIconApi) {
        weatherIconApiKey = key;
        break;
      }
    }
    if (weatherIcon[weatherIconApiKey]) {
      return (
        <img
          src={weatherIcon[weatherIconApiKey]}
          className="temCelciusIcon"
          alt=""
        />
      );
    }
  }

  return (
    <div className="tempDetails">
      {locationResponse?.main?.temp ? (
        <>
          <div className="temCelciusContainer">
            <div className="temCelcius">
              <h1>{Math.round(locationResponse?.main?.temp)}&deg;C</h1>
            </div>
            {getWeatherIcon()}
          </div>
          <TempGraph selectedTemp={selectedTemp} />
        </>
      ) : (
        <h1>Please Wait</h1>
      )}
      <div></div>
    </div>
  );
};

export default TemperatureDetails;
