import React, { useEffect, useState } from "react";

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [editUser, setEditUser] = useState({});

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
        if (selectedUser.id === id) {
          setSelectedUser({});
        }
        if (editUser.id === id) {
          setEditUser({});
        }
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
        if (editUser.id === selectedUser.id) {
          setSelectedUser(editUser);
        }
        setEditUser({});
      });
  };

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleChange = (event) => {
    setEditUser({ ...editUser, [event.target.id]: event.target.value });

    // if (event.target.id === "name") {
    //   setEditUser({ ...editUser, name: event.target.value });
    // }

    // if (event.target.id === "phone") {
    //   setEditUser({ ...editUser, phone: event.target.value });
    // }

    // if (event.target.id === "email") {
    //   setEditUser({ ...editUser, email: event.target.value });
    // }
  };

  return (
    <div>
      Todos
      <div style={{ display: "flex" }}>
        <div>
          {users.map((user) => (
            <li key={user.id}>
              <span onClick={() => setSelectedUser(user)}>{user.name}</span>
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
              <br />
              {selectedUser.phone}
            </div>
          ) : (
            <div>No user selected</div>
          )}
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <label>name</label>
        <input id="name" value={editUser.name || ""} onChange={handleChange} />
        <br />
        <label>phone</label>
        <input
          id="phone"
          value={editUser.phone || ""}
          onChange={handleChange}
        />
        <br />
        <label>email</label>
        <input
          id="email"
          value={editUser.email || ""}
          onChange={handleChange}
        />
        <br />
        <button disabled={!editUser.id} onClick={handleUpdate}>
          update
        </button>
      </div>
    </div>
  );
};

export default Todos;
