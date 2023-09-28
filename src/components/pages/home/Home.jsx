import { useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  //console.log(darkMode);

  const switchMode = () => {
    setDarkMode( !darkMode )
  };

  const add = () => {
    setCounter(counter + 1);
  };

  /*console.log(counter);*/

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={add}>Add</button>
      <button onClick={switchMode}>Dark Mode</button>
    </div>
  );
};
