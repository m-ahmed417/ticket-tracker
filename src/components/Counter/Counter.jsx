import React, { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const handleIncrement = () => {
    if (count < 0) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <div className="counter">
      Counter
      <h5 className="counter__button-0">{count}</h5>
      <div className="counter__buttons">
        <button className="counter__button-1" onClick={handleDecrement}>
          -
        </button>
        <button className="counter__button-2" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
