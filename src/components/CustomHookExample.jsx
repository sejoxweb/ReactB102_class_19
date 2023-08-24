import React from "react";
import useFetch from "../hooks/useFetch";

const List = ({ data }) => {
  if (data) {
    return data.map((item) => {
      return <p key={item.id}>{item.title}</p>;
    });
  } else {
    return <div> no items</div>;
  }
};

const CustomHookExample = () => {
  const [todos, setTodos] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const [posts, setPosts] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("posts>>>", posts);
  return (
    <>
      <List data={todos} />
      <div>
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <List data={posts} />
    </>
  );
};

export default CustomHookExample;
