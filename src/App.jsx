import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/login/Login";
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Login/>
    </div>
  );
}

export default App;
