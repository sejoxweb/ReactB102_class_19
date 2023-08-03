import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import Button from "./components/Button";
import InputTwo from "./components/InputTwo";

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
      <Input handleChange={handleChange} />
      {/* <input onChange={handleChange} /> */}
      <Button handleClick={handleClick} />
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* <div>here: {showValue}</div> */}
      {/* properties to be called as "props" */}
      <Output value={showValue} here="here:" />
      <InputTwo />
    </div>
  );
}

export default App;
