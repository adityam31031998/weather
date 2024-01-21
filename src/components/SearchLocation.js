import React, { useEffect, useState } from "react";
import "../componentCss/SearchLocation.css";
import iconLocation from "../assets/icons/location.png";
import iconSearch from "../assets/icons/searchIcon.png";

const SearchLocation = ({ getLocation, setlocationResponse }) => {
  const [inputValue, setInputValue] = useState("Delhi");

  // let api_key = "4b1a3c7dc4cfcce014fe7cc37f545cf4";
  useEffect(() => {
    let api_key = "9d81b01f5cf402f40b5e8ffd43a48762";

    if (Object.keys(getLocation).length !== 0) {
      const currentLocation = async () => {
        try {
          let getCurrentFetchApi = await fetch(
            // `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${getLocation.latitude}&lon=${getLocation.longitude}&appid=${api_key}`
            `https://api.openweathermap.org/data/2.5/weather?lat=${getLocation.latitude}&lon=${getLocation.longitude}&units=metric&appid=${api_key}`
          );
          let response = await getCurrentFetchApi.json();

          setlocationResponse(response);
        } catch (error) {
          console.log(error.message, "faid to load api");
        }
      };
      currentLocation();
    }
  }, [getLocation, setlocationResponse]);
  const handleInput = async (e) => {
    setInputValue(e);
    // if (e !== "") {
    //   console.log("fdddddddddddddddddd");
    // } else {
    //   let otherss = await fetch(
    //     `http://api.openweathermap.org/geo/1.0/direct?q=${e},"IN"&limit=5&appid=${api_key}`
    //   );
    // let response = await otherss.json();
    // console.log(response);
    // }
  };
  return (
    <div className="searchBox">
      <div className="controlSearchBox">
        <img
          className="iconLocation"
          alt="locationIconLoding"
          src={iconLocation}
        />
        <input
          className="searchInput"
          onChange={(e) => handleInput(e.target.value)}
          value={inputValue}
          type="text"
          placeholder="Search"
        />
        <img
          className="iconLocation"
          alt="locationIconLoding"
          src={iconSearch}
        />
      </div>
    </div>
  );
};

export default SearchLocation;
