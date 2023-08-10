import React, { useEffect, useState } from "react";

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [editUser, setEditUser] = useState({});

  console.log("editUser>>>", editUser);

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

  const handleUpdate = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${editUser.id}`, {
      method: "PUT",
      body: JSON.stringify(editUser),
    })
      .then((response) => response.json())
      .then((json) => {
        let tempUsers = [...users];
        tempUsers = tempUsers.map((u) => {
          if (u.id === editUser.id) {
            return editUser;
          } else {
            return u;
          }
        });
        setUsers(tempUsers);
      });
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setEditUser({ ...editUser, name: event.target.value });
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
              <button onClick={() => handleEdit(user)}>edit</button>
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
      <div style={{ marginTop: "30px" }}>
        <input value={editUser.name} onChange={handleChange} />{" "}
        <button onClick={handleUpdate}>update</button>
      </div>
    </div>
  );
};

export default Todos;
