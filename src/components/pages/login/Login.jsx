import { useState } from "react";

export const Login = () => {

  const[ name , setName ]= useState("John")

  const changeName =()=>{
    setName ("Juan")
  }

  return (
  <div>
    <h2>{name}</h2>
    <button onClick={changeName}>Change Name</button>
  </div>
  );
};