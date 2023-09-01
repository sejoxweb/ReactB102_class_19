import { useState } from "react";

function ClickCounter({ isText, extra, render }) {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks((prevClicks) => prevClicks + 1);
  }

  return render(clicks, handleClick);

  //   return isText ? (
  //     <p onClick={handleClick}>
  //       Clicked {clicks} times {extra ? extra : ""}
  //     </p>
  //   ) : (
  //     <button onClick={handleClick}>
  //       Clicked {clicks} times {extra ? extra : ""}
  //     </button>
  //   );
}

const RenderPropsExample = () => {
  return (
    <div>
      <ClickCounter
        render={(clicks, handleClick) => (
          <button onClick={handleClick}>Clicked {clicks} times</button>
        )}
      />
      <ClickCounter
        render={(clicks, handleClick) => (
          <p onClick={handleClick}>Clicked {clicks} times</p>
        )}
      />

      <ClickCounter
        render={(clicks, handleClick) => (
          <p onClick={handleClick}>
            Clicked {clicks} times more text sdfsdfsdf
          </p>
        )}
      />
      {/* <ClickCounter isText={true} />

      <ClickCounter extra="more text" />
      <ClickCounter isText={true} extra="more text" /> */}
    </div>
  );
};

export default RenderPropsExample;
