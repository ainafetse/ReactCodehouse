import { ThemeProvider } from "@emotion/react";
import CounterContainer from "./components/common/counter/CounterContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { customTheme } from "./themeConfig";
/*import Login from "./components/pages/login/Login";*/


function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <Home />
      <ItemListContainer/>
      <CounterContainer stock={5}/>
      </ThemeProvider>
  );
  }

export default App;
