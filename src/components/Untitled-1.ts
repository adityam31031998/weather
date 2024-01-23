import React from "react";
import "../componentCss/TemperatureDetails.css";
import clearSky from "../assets/icons/weatherIcons/clear.png";
import scatteredClouds from "../assets/icons/weatherIcons/scatteredClouds.png";

const TemperatureDetails = ({ locationResponse }) => {
  let weatherIcon = {
    "clear sky": clearSky,
    "few clouds": scatteredClouds,
    "scattered clouds": scatteredClouds,
    "broken clouds": scatteredClouds,
    "shower rain": scatteredClouds,
    rain: scatteredClouds,
    thunderstorm: scatteredClouds,
    snow: scatteredClouds,
    mist: scatteredClouds,
  };

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

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString().substring(0, 5); // Extract only hours and minutes
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
          <div className="tempPreHum">
            <div>
              <h3>Pressure</h3>
              <p>{locationResponse?.main?.pressure} hPa</p>
            </div>
            <div>
              <h3>Humidity</h3>
              <p>{locationResponse?.main?.humidity} %</p>
            </div>
          </div>
          <div className="tempPreHum">
            <div>
              <h3>Sunrise</h3>
              <p>{formatTimestamp(locationResponse?.sys?.sunrise)}</p>
            </div>
            <div>
              <h3>Sunset</h3>
              <p>{formatTimestamp(locationResponse?.sys?.sunset)}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Please Wait</h1>
      )}
    </div>
  );
};

export default TemperatureDetails;
