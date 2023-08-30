import React, { useState, useReducer } from "react";

function reducer(state, action) {
  console.log("state>>>", state);
  console.log("action>>>", action);
  if (action.type === "inrement_age") {
    return { age: state.age + 1 };
  } else if (action.type === "decrement_age") {
    return { age: state.age - 1 };
  }
  return state;
}
const UseReducerExample = () => {
  // const [age, setAge] = useState(21);
  const [state, dispatch] = useReducer(reducer, { age: 21 }); //[state, dispatch]

  console.log("age>>>", state.age);
  const handleAgeIncrement = () => dispatch({ type: "inrement_age" });
  const handleAgeDecrement = () => dispatch({ type: "decrement_age" });

  //const handleAgeIncrement = () => setAge((age) => age + 1);

  return (
    <div>
      UseReducerExample
      {/* <button onClick={handleAgeIncrement}>Increment Age {age} </button> */}
      <button onClick={handleAgeIncrement}>useReducer Increment Age</button>
      <button onClick={handleAgeDecrement}>useReducer Decrement Age</button>
      {state.age}
    </div>
  );
};

export default UseReducerExample;
