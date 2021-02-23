import React from "react";
import WindImg from "./Wind.gif";

function Wind(props) {
  const { data } = props;

  return (
    <div>
      <h1>Wind</h1>
      <img src={WindImg} alt="error" height="450px" width="400px" />
      <p>Wind speed: {data && data.wind_spd} (m/s)</p>
      <p>Wind direction: {data && data.wind_dir} (degrees)</p>
    </div>
  );
}

export default Wind;
