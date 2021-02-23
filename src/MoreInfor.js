import React from "react";
import OtherImg from "./Other.gif";
import Data from "./Data";

function MoreInfor(props) {
  const { data } = props;

  return (
    <div>
      <h1>Visibility</h1>
      <img src={OtherImg} alt="error" height="450px" width="400px" />
      <p>Visibility: {data && data.vis}(km)</p>
      <p>UV Index: {data && data.uv}</p>
    </div>
  );
}

export default MoreInfor;
