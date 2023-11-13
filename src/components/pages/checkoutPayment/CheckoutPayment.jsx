import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import {Box, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,} from "@mui/material";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const total = getTotalPrice();

  const handleChange = (ev) => {
    setUserData({ ...userData, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((element) => {
      updateDoc(doc(db, "products", element.id), {
        stock: element.stock - element.quantity,
      });
    });
    clearCart();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2em",
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      {orderId ? (
        <div>
          <h1 style={{color:"royalblue"}}>
            Thank you for your purchase!
          </h1>
          <h2 style={{color:"purple"}}>
            Your purchase ID is: {orderId}
          </h2>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product) => (
                  <TableRow key={product.id}>
                     <TableCell>
                      <img src={product.img} alt="" style={{ width: "50px" }} />
                    </TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell align="center">{product.quantity}</TableCell>
                    <TableCell align="center">
                      ${product.price * product.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <h1 style={{color:"royalblue"}}>Total: ${total}</h1>
          <Link to="/">
                <Button variant="contained">
                    Keep shopping
                </Button>
            </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            type="text"
            placeholder="Enter your phone number"
            name="phone"
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            margin="normal"
          />
          <Button variant="contained" type="submit" sx={{ marginTop: "1em" }}>
            Buy order
          </Button>
          {/* Resumen de la orden */}
          <TableContainer sx={{ marginTop: "2em" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Total Products:</TableCell>
                  <TableCell align="right">{cart.length}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total Cost:</TableCell>
                  <TableCell align="right">${total}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </form>
      )}
    </Box>
  );
};

export default CheckoutOficial;
