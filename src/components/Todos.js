import React, { useEffect, useState } from "react";

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const handleDelete = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1", { method: "DELETE" })
      .then((response) => response.json())
      .then((json) => {
        let tempUsers = [...users];
        tempUsers = tempUsers.filter((user) => user.id !== 1);
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
              {user.name} <button onClick={handleDelete}>delete</button>
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
