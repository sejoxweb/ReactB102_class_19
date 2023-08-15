import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import CreateUpdate from "./CreateUpdate";
import Modal from "./Modal";

const Todos = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [editUser, setEditUser] = useState({});
  const [isEdit, setEdit] = useState(false);

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
      .then(() => {
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
    setEdit(true);
  };

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.id]: e.target.value });
  };

  const handleCreate = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(editUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const newUser = await response.json();

    setUsers((prevUsers) => [...prevUsers, newUser]); //setUser([...users, newUser])
    setEditUser({});
  };

  return (
    <div>
      Users{" "}
      <button
        onClick={() => {
          setEdit(false);
          setEditUser({});
        }}
      >
        Add User
      </button>
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
      </div>
      <CreateUpdate
        editUser={editUser}
        handleChange={handleChange}
        isEdit={isEdit}
        handleCreate={handleCreate}
        handleUpdate={handleUpdate}
      />
      {selectedUser.name && (
        <Modal>
          <UserDetails
            user={selectedUser}
            onClose={() => setSelectedUser({})}
          />
        </Modal>
      )}
      <Modal>
        <div>something</div>
      </Modal>
    </div>
  );
};

export default Todos;
