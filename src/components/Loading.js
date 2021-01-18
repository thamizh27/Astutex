import React from "react";
import spinner from "../Img/spinner.gif";

const Loading = () => {
  return (
    <div className="spinner-div">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Loading;
