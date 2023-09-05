import React, { useState } from "react";
import ShowCount from "../components/ShowCount";
import { CounterContext } from "../context/CounterContext";

const CounterContextExample = () => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={count}>
      <div>
        CounterContextExample
        <button onClick={() => setCount(count - 1)}>-</button>
        <ShowCount />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </CounterContext.Provider>
  );
};

export default CounterContextExample;
