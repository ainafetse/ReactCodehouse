import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetailContainer/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
//import CheckoutFormik from "../components/pages/checkoutFormik/CheckoutFormik";
import CheckoutPayment from "../components/pages/checkoutPayment/CheckoutPayment";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer ,
    },
    {
        id: "category",
        path: "/category/:categoryName" ,
        Element: ItemListContainer ,
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer,
    },
    {
        id: "detail",
        path: "/itemDetail/:category/:id",
        Element: ItemDetailContainer ,
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutPayment ,
    },

]