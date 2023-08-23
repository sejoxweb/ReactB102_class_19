import React, { useEffect, useMemo, useRef, useState } from "react";

const UseRefExampleThree = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <label htmlFor="input">Enter some text:</label>
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
};
export default UseRefExampleThree;
