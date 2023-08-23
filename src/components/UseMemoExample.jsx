import React, { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [num, setNum] = useState(1000);
  const [count, setCount] = useState(0);
  const memorizedValue = useMemo(() => expensiveCalculation(num), [num]);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        increment {count}
      </button>
      <input onChange={(e) => setNum(parseInt(e.target.value))} />
    </div>
  );
};

function expensiveCalculation(num) {
  console.log("started>>>");
  let value = 0;
  for (let i = 0; i <= num; i++) {
    value = value + i;
  }
  console.log("ended");
  return value;
}

export default UseMemoExample;
