import { useState } from "react";

const Checkout = () => {

  const [userInfo, setUserInfo] = useState({
    name: "",
    lastname: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    lastname: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userInfo);
  };

  console.log(errors)

  return (
    <div>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="nombre" onChange={ (e)=>setNombre(e.target.value) }  /> */}

        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.name}
        </span>
        <input
          type="text"
          name="lastname"
          onChange={handleChange}
          placeholder="Last Name"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.lastname}
        </span>

        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <span style={{ color: "crimson", fontSize: " 0.5rem" }}>
          {errors.email}
        </span>

        <button>Send</button>
        <button type="button" onClick={()=>console.log("se cancelo")}>Cancel</button>
      </form>

      {/* <button onClick={}></button> */}
    </div>
  );
};

export default Checkout;