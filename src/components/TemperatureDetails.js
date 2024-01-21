import React from "react";
import "../componentCss/TemperatureDetails.css";
import clearSky from "../assets/icons/weatherIcons/clear.png";
import scatteredClouds from "../assets/icons/weatherIcons/scatteredClouds.png";
// import datetime;
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
  // let timeStamp = locationResponse.dt;
  // console.log(timeStamp);
  // const dateObject = new Date(timeStamp * 1000);
  // const formattedDate = dateObject.toLocaleString();
  // console.log(formattedDate);
  return (
    <div className="tempDetails">
      {locationResponse.main?.temp ? (
        <div className="temCelciusContainer">
          <div className="temCelcius">
            <h1>{locationResponse.main?.temp.toFixed()}&deg;C</h1>
          </div>
          {getWeatherIcon()}
          {/* <p>Preasure</p> */}
        </div>
      ) : (
        <h1>Please Wait</h1>
      )}
      <div></div>
    </div>
  );
};

export default TemperatureDetails;
