import { useState } from "react"
import Counter from "./Counter";

const CounterContainer = ({stock, onAdd, initial=1}) => {
  const [counter, setCounter] =useState (initial);

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
