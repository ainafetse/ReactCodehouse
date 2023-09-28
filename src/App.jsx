import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { Login } from "./components/pages/login/Login";
function App() {
  let greeting = "Hello Juan, great to see you!"
  return (
    <div>
      <Navbar/>
      <Home/>
      <Login/>
      <ItemListContainer greeting={greeting} age={21} x={true}/>
    </div>
  );
}

export default App;
