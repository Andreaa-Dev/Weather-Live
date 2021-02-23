import React from "react";
import Temp from "./Temp";
import Sun from "./Sun";
import Wind from "./Wind";
import MoreInfor from "./MoreInfor";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: center;
`;

const Box = styled.div`
  margin: 1em;
  padding: 0 px;
  border: 2px solid black;
  border-radius: 7px;
`;
function Data(props) {
  const { data } = props;

  return (
    <Page>
      <Box>
        <Temp data={data} />
      </Box>
      <Box>
        <Sun data={data} />
      </Box>
      <Box>
        <Wind data={data} />
      </Box>
      <Box>
        <MoreInfor data={data} />
      </Box>
    </Page>
  );
}

export default Data;
