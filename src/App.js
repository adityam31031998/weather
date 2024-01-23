import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./componentCss/App.css";
import GetLocation from "./components/getLocation";
import SearchLocation from "./components/SearchLocation";
import animationData from "./assets/animation/bar-loader.json";
import Temperature from "./components/Temperature";
import TemperatureDetails from "./components/TemperatureDetails";
import clearSky from "./assets/icons/weatherIcons/clear.png";
import scatteredClouds from "./assets/icons/weatherIcons/scatteredClouds.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [locationResponse, setlocationResponse] = useState(true);
  const [getLocation, setGetLocation] = useState({});
  const [temperDate, setTemperDate] = useState({});
  let [selectedTemp, setSelectedTemp] = useState({});
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
    fog: scatteredClouds,
    smoke: scatteredClouds,
    "overcast clouds": scatteredClouds,
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Lottie animationData={animationData} className="animationLoadingCss" />
      ) : (
        <div className="containerMiddle">
          <GetLocation setGetLocation={setGetLocation} />
          <SearchLocation
            getLocation={getLocation}
            setlocationResponse={setlocationResponse}
            setTemperDate={setTemperDate}
          />
          <Temperature
            setSelectedTemp={setSelectedTemp}
            weatherIcon={weatherIcon}
            temperDate={temperDate}
          />
          <TemperatureDetails
            selectedTemp={selectedTemp}
            weatherIcon={weatherIcon}
            locationResponse={locationResponse}
          />
          {console.log(selectedTemp)}
        </div>
      )}
    </div>
  );
}

export default App;
