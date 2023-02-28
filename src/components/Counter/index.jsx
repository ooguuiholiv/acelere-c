import React from "react";
import "./counter.css";
const Counter = ({ title, number }) => {
  return (
    <>
      <div className="counter">
        <p className="counter-number">{number}</p>
        <h4 className="counter-text">{title}</h4>
      </div>
    </>
  );
};

export default Counter;
