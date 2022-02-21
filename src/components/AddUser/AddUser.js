import { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const newUser = { name, email, phone };
    // console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added the user.");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please Add an User</h2>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          name=""
          ref={nameRef}
          placeholder="Enter your name"
          autoComplete="on"
          id=""
        />
        <input
          type="email"
          name=""
          ref={emailRef}
          placeholder="Enter your email"
          autoComplete="on"
          id=""
        />
        <input
          type="number"
          name=""
          ref={phoneRef}
          placeholder="Enter your number"
          autoComplete="on"
          id=""
        />
        <input className="btn" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;
