import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "./componentCss/App.css";
import GetLocation from "./components/getLocation";
import SearchLocation from "./components/SearchLocation";
import animationData from "./assets/animation/bar-loader.json";
import Temperature from "./components/Temperature";
import TemperatureDetails from "./components/TemperatureDetails";

function App() {
  const [loading, setLoading] = useState(true);
  const [locationResponse, setlocationResponse] = useState(true);
  const [getLocation, setGetLocation] = useState({});

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
          />
          <Temperature locationResponse={locationResponse} />
          <TemperatureDetails locationResponse={locationResponse} />
        </div>
      )}
    </div>
  );
}

export default App;
