import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Oops!", "User has been deleted", "warning");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h2>Users Available: {users.length} </h2>
      <div>
        {users.map((user) => (
          <div
            key={user._id}
            style={{
              background: "#f4f4f4",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <p>Name:{user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <Link  to={`/users/update/${user._id}`}>
              <Button variant="success">Update</Button>
            </Link>
            <button
              className="btn btn-danger"
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
