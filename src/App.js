//import ControlledAndUnControlled from "./components/ControlledAndUnControlled";

import "./App.css";
import { StyledButton } from "./components/Button";

import css from "./test.module.css";

console.log("css>>", css);

function App() {
  return (
    <div>
      {/* <ControlledAndUnControlled /> */}
      <h1
        className={`heading ${css.test} ${css.test2}`}
        style={{ fontSize: "40px" }}
      >
        Hello World!
      </h1>
      <p className={css.test}>test paragraph</p>
      <StyledButton variant="primary">click me</StyledButton>
      <StyledButton className={`heading ${css.test} ${css.test2}`}>
        click me 2
      </StyledButton>
    </div>
  );
}

export default App;
