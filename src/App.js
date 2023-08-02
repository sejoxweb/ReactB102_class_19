import { useState } from "react";
import Output from "./components/Output";

function App() {
  const [inputValue, setInputValue] = useState(""); //"" [state, setState]
  const [showValue, setShowValue] = useState("");

  const handleChange = (e) => {
    //console.log("value>>>", e.target.value);
    //inputValue = e.target.value;
    setInputValue(e.target.value);
  };

  // console.log("inputValue>>>", inputValue);

  const handleClick = () => {
    setShowValue(inputValue);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      {/* <div>here: {showValue}</div> */}
      {/* properties to be called as "props" */}
      <Output value={showValue} here="here:" />
    </div>
  );
}

export default App;
