import "./App.css";
import Weather from "./Weather";
import Data from "./Data";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h1`
  font-family: "Dancing Script", cursive;
  color: #28527a;
`;

function App() {
  const url =
    "https://api.weatherbit.io/v2.0/current?city=Helsinki&key=5e42a57042f7468c823d12c2911a7534";

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await axios.get(url);

    setData(data.data.data[0]);
    console.log(data.data.data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Title>WEATHER LIVE</Title>

      <Weather data={data} />
      <Data data={data} />
    </div>
  );
}

export default App;
