import { Badge } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {

  const {cart} = useContext( CartContext )
  return (
    <Link to="/cart">
        <Badge badgeContent={cart.length} showZero color="primary">
      <ShoppingCartIcon color="action" />
    </Badge>
    </Link>
  )
}

export default CartWidget