import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

function Weather(props) {
  const { data } = props;
  return (
    <div>
      <p>Location: Helsinki, Finland</p>

      <p> Date: {data && data.datetime}</p>
    </div>
  );
}

export default Weather;
