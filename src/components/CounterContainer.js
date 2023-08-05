import React, { useState } from "react";
import Counter from "./Counter";
import CounterTwo from "./CounterTwo";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);
  function increment() {
    //counter++ equalt to coutner = counter+1
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div>
      {/* firstCounter */}
      <Counter increment={increment} decrement={decrement} counter={counter} />
      {/* secondCounter */}
      <CounterTwo counter={counter} increment={increment} />
    </div>
  );
};

export default CounterContainer;
