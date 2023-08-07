import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";
import Button from "./components/Button";
import InputTwo from "./components/InputTwo";
import ProductsList from "./components/ProductsList";
import Counter from "./components/Counter";
import CounterContainer from "./components/CounterContainer";
import Todos from "./components/Todos";

function App() {
  const [inputValue, setInputValue] = useState(""); //"" [state, setState]
  //const [showValue, setShowValue] = useState("");
  const [products, setProducts] = useState(["iphone", "samsung"]);

  console.log("products>>>", products);
  const handleChange = (e) => {
    //console.log("value>>>", e.target.value);
    //inputValue = e.target.value;
    setInputValue(e.target.value);
  };

  // console.log("inputValue>>>", inputValue);

  const handleClick = () => {
    // setShowValue(inputValue);
    //1st aproach
    // const tempProducts = [...products]; //products
    // tempProducts.push(inputValue);
    // console.log("sdfsfd", tempProducts);
    // setProducts(tempProducts);
    //2nd aproach
    setProducts([...products, inputValue]);
  };

  // const product1 = "iphone";
  // const product2 = "samsung";

  return (
    <div>
      {/* <Input handleChange={handleChange} /> */}
      {/* <input onChange={handleChange} /> */}
      {/* <Button handleClick={handleClick} /> */}
      {/* <button onClick={handleClick}>Click me</button> */}
      {/* <div>here: {showValue}</div> */}
      {/* properties to be called as "props" */}
      {/* <Output value={showValue} here="here:" /> */}
      {/* <InputTwo /> */}
      {/* products here */}
      {/* <ProductsList products={products} /> */}
      {/* <CounterContainer /> */}
      <Todos />
    </div>
  );
}

export default App;
