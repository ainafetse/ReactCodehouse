
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./themeConfig";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryName" element={<ItemListContainer/>} />
            <Route path="/cart" element={<CartContainer/>} />
            <Route path="/itemDetail/:category/:id" element={<ItemDetailContainer/>} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
          </Route>

        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
  }

export default App;
