import React, { useEffect, useState } from "react";

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    // const json = {
    //   users:["user1"]
    // }
    // setUsers(json.users)
  }, []);

  const handleDelete = (e, id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        let tempUsers = [...users];
        tempUsers = tempUsers.filter((user) => user.id !== id);
        setUsers(tempUsers);
      });
  };

  const handleUpdate = (e, user) => {
    console.log("user>>", user);
    const updatedUser = {
      ...user,
      name: "sejox",
    };
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((json) => {
        let tempUsers = [...users];
        tempUsers = tempUsers.map((u) => {
          if (u.id === user.id) {
            return updatedUser;
          } else {
            return u;
          }
        });
        setUsers(tempUsers);
      });
  };

  return (
    <div>
      Todos
      <div style={{ display: "flex" }}>
        <div>
          {users.map((user) => (
            <li key={user.id} onClick={() => setSelectedUser(user)}>
              {user.name}{" "}
              <button onClick={(e) => handleDelete(e, user.id)}>delete</button>
              <button onClick={(e) => handleUpdate(e, user)}>edit</button>
            </li>
          ))}
        </div>
        <div>
          User Details
          {Object.keys(selectedUser).length > 0 ? (
            <div>
              {selectedUser.name}
              <br />
              {selectedUser.company.name}
            </div>
          ) : (
            <div>No user selected</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
