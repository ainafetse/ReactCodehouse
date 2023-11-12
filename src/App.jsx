
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import AppRouter from "./router/AppRouter";
import CartContextComponet from "./context/CartContext";


function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CartContextComponet>
        <AppRouter/>
        </CartContextComponet>
      </ThemeProvider>
    </BrowserRouter>
  );
  }

export default App;
