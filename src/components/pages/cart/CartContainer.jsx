import { Button, Grid } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"


const CartContainer = () => {

  const {cart, clearCart} = useContext(CartContext)

  return (
    <div>
      <h1>Shopping cart</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}><h2>Item</h2></Grid>
        <Grid item xs={3}><h2>Description</h2></Grid>
        <Grid item xs={3}><h2>Quantity</h2></Grid>
        <Grid item xs={3}><h2>Actions</h2></Grid>
      </Grid>
      {
        cart.map((product) => (
          <Grid container spacing={2} key={product.id} style={{display:"flex"}}>
            <Grid item xs={3}><img src={product.img} alt="" style={{ width: '50px' }} /></Grid>
            <Grid item xs={3}>
              <h2 >{product.title}</h2>
              <p>{product.description}</p>
            </Grid>
            <Grid item xs={3}><h2>{product.quantity}</h2></Grid>
            <Grid item xs={3}><Button variant="contained">Save for later</Button> <Button variant="outlined">Remove</Button></Grid>
          </Grid>
        ))}
      <Link to="/checkout">
        <Button variant="contained" style={{justifyContent:"flex-end"}}>Check out</Button>
      </Link>
      <Button variant="contained" onClick={clearCart} style={{margin:"1em"}}>Empty Cart</Button>
    </div>
  )
}

export default CartContainer