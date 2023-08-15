import React from "react";

const UserDetails = ({ user: { name, phone, email }, onClose }) => {
  return (
    <div
      style={{
        backgroundColor: "#00000080",
        zIndex: 1,
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "100vw",
        height: "100vh",
      }}
      onClick={onClose}
    >
      <div
        style={{
          zIndex: 1,
          position: "relative",
          backgroundColor: "#fff",
          margin: "100px",
          padding: "10px",
        }}
      >
        <span
          style={{
            position: "absolute",
            right: "0px",
            padding: "10px",
            top: "0",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          X
        </span>
        User Details
        {name ? (
          <div>
            Name: {name}
            <br />
            Phone: {phone}
            <br />
            email: {email}
          </div>
        ) : (
          <div>No user selected</div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
