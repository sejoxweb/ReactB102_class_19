import React, { useState, useReducer } from "react";
import { reducer } from "../reducers/reducer";

const UseReducerExampleTwo = () => {
  // const [age, setAge] = useState(21);
  const [state, dispatch] = useReducer(reducer, { age: 21, name: "sejox" }); //[state, dispatch]

  console.log("final state state>>>", state);
  const handleAgeIncrement = () => dispatch({ type: "inrement_age" });
  const handleAgeDecrement = () => dispatch({ type: "decrement_age" });

  //const handleAgeIncrement = () => setAge((age) => age + 1);
  const handleNameChange = (e) => {
    dispatch({ type: "changeName", payload: { updatedName: e.target.value } });
  };

  return (
    <div>
      UseReducerExampleTwo
      {/* <button onClick={handleAgeIncrement}>Increment Age {age} </button> */}
      <button onClick={handleAgeIncrement}>useReducer Increment Age</button>
      <button onClick={handleAgeDecrement}>useReducer Decrement Age</button>
      {state.age}
      <input value={state.name} onChange={handleNameChange} />
    </div>
  );
};

export default UseReducerExampleTwo;
