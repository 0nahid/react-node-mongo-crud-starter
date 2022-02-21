import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  return (
    <div>
      <p>This is Update User of ID: {id} </p>
    </div>
  );
};

export default UpdateUser;
