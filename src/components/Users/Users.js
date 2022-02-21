import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  return (
    <div>
      <h2>Users Available: {users.length} </h2>
      <div
        style={{
          width: "400px",
        }}
      >
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              background: "#f4f4f4",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
            }}
          >
            <p>
              {user.name} :: {user.email}
            </p>
            <Link to={`/users/update/${user._id}`}>
              <button
                style={{
                  padding: "5px 15px",
                  outline: "none",
                  border: "none",
                  borderRadius: "5px",
                  background: "lightgreen",
                  margin: "5px",
                }}
              >
                Update
              </button>
            </Link>
            <button
              style={{
                padding: "5px 15px",
                outline: "none",
                border: "none",
                borderRadius: "5px",
                background: "#ff5200",
              }}
              onClick={() => handleDeleteUser(user._id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
