import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const MyCount = () => {
  const count = useContext(CounterContext);
  return count;
};
const ShowCount = () => {
  return (
    <div>
      ShowCount <MyCount />
    </div>
  );
};

export default ShowCount;
