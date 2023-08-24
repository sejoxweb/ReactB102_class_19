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

const ListWithFetch = ({ url }) => {
  const [data, setData] = useFetch(url);
  return <List data={data} />;
};

const CustomHookExampleTwo = () => {
  const [user, setUser] = useFetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log("user>>>", user);

  const mylist = [
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
  ];

  return (
    <>
      <List data={mylist} />
      <div>
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <ListWithFetch url="https://jsonplaceholder.typicode.com/todos" />
      <div>
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <ListWithFetch url="https://jsonplaceholder.typicode.com/posts" />
    </>
  );
};

export default CustomHookExampleTwo;
