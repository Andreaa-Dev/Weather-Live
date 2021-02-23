import React from "react";
import Data from "./Data";
import TempImg from "./Temp.gif";

function Temp(props) {
  const { data } = props;

  return (
    <div>
      <h1>Temperature</h1>
      <img src={TempImg} alt="error" height="450px" width="400px" />
      <p>Temperature: {data && data.temp}</p>
      <p>Feel like: {data && data.app_temp}</p>
    </div>
  );
}

export default Temp;
