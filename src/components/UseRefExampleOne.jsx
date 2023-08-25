import React, { useEffect, useMemo, useRef, useState } from "react";

const UseRefExampleOne = () => {
  const [num, setNum] = useState(1000);
  const count = useRef(0); // {current:0}

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <input onChange={(e) => setNum(parseInt(e.target.value))} />
      <br />
      number of times rendered
      {count.current}
    </div>
  );
};
export default UseRefExampleOne;
