import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios(`http://localhost:5000/users/${id}`).then((data) =>
      setUser(data.data.[0])
    );
  }, [id]);
  return (
    <div>
      <p>This is Update User of ID: {id} </p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UpdateUser;
