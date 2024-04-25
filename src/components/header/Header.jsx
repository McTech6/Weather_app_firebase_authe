import React, { useState } from "react";
import "./header.css";
import search from "../Assets/search.png";
import cloud from "../Assets/cloud.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import animation from "../Assets/animation.gif"
const Header = () => {
  let api_key = "4c4ca329db43f73e19bcf149070387ca";
  const [location, setLocation] = useState("china");
  const [input, setInput] = useState("china");
  const [humidity, setHumidity] = useState("64");
  const [wind, setWind] = useState("80");
  const [temp, setTemp] = useState("27");
  const [loading, setLoading] = useState(false);

  const searchme = async () => {
    setLoading(true);
    if (input === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    setHumidity(data.main?.humidity);
    setWind(data.wind?.speed);
    setTemp(data.main?.temp);
    setLocation(data.name);
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search your Location"
          className="location"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div
          className="search__icon"
          onClick={() => {
            searchme();
          }}
        >
          <img src={search} alt="Search Icon" />
        </div>
      </div>
      <div className="section__1">
        <img src={cloud} alt="" />
      </div>
      {loading ? (
        <div className="loading">
           <img src={animation} className="animation" alt="" />
        </div>
      ) : (
        <>
          <div className="temperature"> {temp} &deg;C</div>
          <div className="weather__location">{location}</div>
          <div className="wrapper">
            <div className="element">
              <img src={humidity} alt="" className="icon" />
              <div className="data">
                <div className="humidity">{humidity}%</div>
                <div className="text">Humidity</div>
              </div>
            </div>
            <div className="element">
              <img src={wind} alt="" className="icon" />
              <div className="data">
                <div className="wind">{wind} km/h</div>
                <div className="text">Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
