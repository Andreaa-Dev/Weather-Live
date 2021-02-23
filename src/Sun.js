import React from "react";
import Data from "./Data";
import SunImg from "./Sun.gif";

function Sun(props) {
  const { data } = props;

  return (
    <div>
      <h1>Sunset time</h1>
      <img src={SunImg} alt="error" height="450px" width="400px" />
      <p>Sunset: {data && data.sunset}</p>
      <p>Sunrise: {data && data.sunrise}</p>
    </div>
  );
}

export default Sun;
