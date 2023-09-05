//import ControlledAndUnControlled from "./components/ControlledAndUnControlled";

import "./App.css";
import { StyledButton } from "./components/Button";
import ExampleUseCallBack from "./components/ExampleUseCallBack";
import UseMemoExample from "./components/UseMemoExample";
import UseRefExampleOne from "./components/UseRefExampleOne";
import UseRefExampleThree from "./components/UseRefExampleThree";
import UseRefExampleTwo from "./components/UseRefExampleTwo";
import CustomHookExample from "./components/CustomHookExample";
import CustomHookExampleTwo from "./components/CustomHookExampleTwo";
import UseRefVsUseMemo from "./components/UseRefVsUseMemo";

import css from "./test.module.css";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import UseReducerExample from "./components/UseReducerExample";
import UseReducerExampleTwo from "./components/UseReducerExampleTwo";
import NoPortalExample from "./components/NoPortalExample";
import PortalExample from "./components/PortalExample";
import RenderPropsExample from "./components/RenderPropsExample";
import ForwardingRefExample from "./components/ForwardingRefExample";
import QuestionApp from "./pages/QuestionsApp";
import CounterContextExample from "./pages/CounterContextExample";
import LevelContextExample from "./pages/LevelContextExample";

function App() {
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const apiKeyProd = process.env.REACT_APP_API_KEY_PROD;

  return (
    <div>
      <LevelContextExample />
      {/* <CounterContextExample /> */}
      {/* <QuestionApp /> */}
      {/* <ForwardingRefExample /> */}
      {/* <RenderPropsExample /> */}
      {/* <>
        <div className="clipping-container">
          <NoPortalExample />
        </div>
        <div className="clipping-container">
          <PortalExample />
        </div>
      </> */}
      {/* <UseReducerExampleTwo /> */}
      {/* <UseReducerExample /> */}
      {/* {process.env.DEV ? apiKey : apiKeyProd}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}></Route>
            <Route path="about/test" element={<div>test</div>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <UseRefVsUseMemo /> */}
      {/* <CustomHookExampleTwo /> */}
      {/* <CustomHookExample /> */}
      {/* <UseRefExampleThree /> */}
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
