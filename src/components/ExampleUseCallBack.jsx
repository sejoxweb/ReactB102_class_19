import React, { useState, useCallback } from "react";
import Counter from "./Counter";
import NameChange from "./NameChange";

const ExampleUseCallBack = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleIncrement = useCallback(() => setCount((count) => count + 1), []);

  const handleNameChange = (e) => setName(e.target.value); //useCallback((e) => setName(e.target.value), []);

  return (
    <div>
      <Counter count={count} increment={handleIncrement} />
      <NameChange name={name} onChange={handleNameChange} />
    </div>
  );
};

export default ExampleUseCallBack;
