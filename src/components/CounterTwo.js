import React, { useState, useEffect } from "react";

const CounterTwo = ({ counter: firstCounterValue }) => {
  const [counterii, setCounterii] = useState(0);

  useEffect(() => {
    setCounterii(firstCounterValue + counterii);
  }, [firstCounterValue]);

  const handleInrease = () => {
    setCounterii(counterii + 1);
  };

  const handleDerease = () => {
    setCounterii(counterii - 1);
  };

  console.log("firstCounterValue>>>", firstCounterValue);
  console.log("counterii", counterii);

  return (
    <div style={{ margin: "50px" }}>
      counter two <button onClick={handleDerease}>-</button>
      {/* <span style={{ padding: "10px" }}>{firstCounterValue}</span> */}
      <span> {counterii} </span>
      <button onClick={handleInrease}>+</button>
    </div>
  );
};

export default CounterTwo;
