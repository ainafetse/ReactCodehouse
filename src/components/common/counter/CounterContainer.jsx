import { useState } from "react"
import Counter from "./Counter";

const CounterContainer = ({stock, onAdd}) => {
  const [counter, setCounter] =useState (1);

  const add = () => {
    if (counter < stock){
      setCounter(counter + 1);
    } else {
      alert("cantidad máxima");
    }
  };
  const remove = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return <Counter add={add} remove={remove} counter={counter} onAdd={onAdd}/>
}

export default CounterContainer;
