import React from "react";

const Counter = ({ count, increment }) => {
  console.log("rendered counter");
  return (
    <div>
      Counter {count}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default React.memo(Counter);
