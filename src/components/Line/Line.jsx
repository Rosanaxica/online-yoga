import React from "react";
import "./style.css";

const Line = ({hour}) => {

  return (
    <>
   <div className="time">{hour}</div>
 </>
  );
};

export default Line;
