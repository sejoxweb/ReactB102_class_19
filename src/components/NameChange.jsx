import React, { useState } from "react";

const NameChange = ({ name, onChange }) => {
  const [age, setAge] = useState("");

  console.log("rendered namechange");

  return (
    <div>
      <input onChange={onChange} />
      <br />
      {name}
      <input onChange={(e) => setAge(e.target.value)} />
      {age}
    </div>
  );
};

export default React.memo(NameChange);
