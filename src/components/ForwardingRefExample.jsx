import React, { forwardRef, useEffect, useRef, useState } from "react";

const MyButton = forwardRef((props, ref) => {
  const { onClick, children } = props;
  return (
    <button ref={ref} onClick={onClick}>
      {children}
    </button>
  );
});

const ForwardingRefExample = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref);
  });
  return (
    <MyButton ref={ref} onClick={() => setCount((count) => count + 1)}>
      click me {count}
    </MyButton>
  );
};

export default ForwardingRefExample;
