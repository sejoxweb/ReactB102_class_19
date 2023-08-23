import React, { useEffect, useMemo, useRef, useState } from "react";

const UseRefExampleTwo = () => {
  const [num, setNum] = useState(1000);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef);
  };
  return (
    <div>
      <input
        ref={inputRef}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={handleClick}>click to focus</button>
    </div>
  );
};
export default UseRefExampleTwo;
