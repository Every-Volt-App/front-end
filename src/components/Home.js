import React from "react";
import img from "../components/assets/home-img.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-image">
        <img src={img}></img>
        <h1 className="main-text">
          Find the nearest <br /> EV charging station
        </h1>
        <input className="searchbar" placeholder="Enter City"></input>
      </div>
    </div>
  );
};

export default Home;
