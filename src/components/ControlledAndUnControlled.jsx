import React, { useState } from "react";

const ControlledAndUnControlled = () => {
  const [userName, setUserName] = useState("name");
  const [userAge, setUserAge] = useState(" ");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setUserAge(e.target.value);
  };
  return (
    <div>
      user name
      {/* as we are not passing "value", so it will be considered as "Un-controlled" input */}
      <input defaultValue={userName} onChange={handleChange} />
      <div>userName: {userName}</div>
      {/* controlled input */}
      <input value={userAge} onChange={handleAgeChange} />
      <div>userAge: {userAge}</div>
    </div>
  );
};

export default ControlledAndUnControlled;
