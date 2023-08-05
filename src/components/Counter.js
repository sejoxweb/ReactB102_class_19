import React, { useState } from "react";

const Counter = ({ increment, decrement, counter }) => {
  return (
    <div style={{ margin: "50px" }}>
      counter one <button onClick={decrement}>-</button>
      <span style={{ padding: "10px" }}>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
