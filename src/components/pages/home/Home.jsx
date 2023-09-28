import { useState } from "react";

export const Home = () => {
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  //console.log(darkMode);

  const switchMode = () => {
    setDarkMode( !darkMode )
  };

  const sumar = () => {
    setCounter(counter + 1);
  };

  /*console.log(counter);*/

  return (
    <div>
      <h4>{counter}</h4>
      <button onClick={sumar}>Sumar</button>
      <button onClick={switchMode}>Cambiar modo</button>
    </div>
  );
};
