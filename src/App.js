//import ControlledAndUnControlled from "./components/ControlledAndUnControlled";

import "./App.css";
import { StyledButton } from "./components/Button";
import ExampleUseCallBack from "./components/ExampleUseCallBack";
import UseMemoExample from "./components/UseMemoExample";
import UseRefExampleOne from "./components/UseRefExampleOne";
import UseRefExampleThree from "./components/UseRefExampleThree";
import UseRefExampleTwo from "./components/UseRefExampleTwo";

import css from "./test.module.css";

function App() {
  return (
    <div>
      <UseRefExampleThree />
      {/* <UseRefExampleTwo /> */}
      {/* <UseRefExampleOne /> */}
      {/* <UseMemoExample /> */}
      {/* <ExampleUseCallBack /> */}
      {/* <ControlledAndUnControlled /> */}
      {/* <h1
        className={`heading ${css.test} ${css.test2}`}
        style={{ fontSize: "40px" }}
      >
        Hello World!
      </h1>
      <p className={css.test}>test paragraph</p>
      <StyledButton variant="primary">click me</StyledButton>
      <StyledButton className={`heading ${css.test} ${css.test2}`}>
        click me 2
      </StyledButton> */}
    </div>
  );
}

export default App;
