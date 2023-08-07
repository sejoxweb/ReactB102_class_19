import React, { useEffect, useState } from "react";

const Todos = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      Todos
      {name} <button onClick={() => setName("sejox")}>update name</button>
    </div>
  );
};

export default Todos;
