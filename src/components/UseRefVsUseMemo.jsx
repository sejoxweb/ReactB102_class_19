import React, { useEffect, useMemo, useRef, useState } from "react";
let a = 0;
const UseRefVsUseMemo = () => {
  const [value, setValue] = useState("");
  const times = useRef(0); // {current:0}

  const countTimes = () => {
    a = a + 1;
    return a;
  };

  const memoTimes = useMemo(() => countTimes(value), [value]);

  useEffect(() => {
    times.current = times.current + 1;
  });

  return (
    <div>
      UseRefVsUseMemo
      <input onChange={(e) => setValue(e.target.value)} />
      <div>Number of times component rendered {times.current}</div>
      <div>Number of times with memo {memoTimes}</div>
    </div>
  );
};

export default UseRefVsUseMemo;
