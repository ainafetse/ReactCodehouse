import { useContext, useState, useEffect } from "react";
import { Button, Grid, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } = useContext(
    CartContext
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Cambiado a 1500 ms (1.5 segundos)

    return () => clearTimeout(timer);
  }, []);

  let total = getTotalPrice();

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={7}>
        <Paper>
          <h1>Shopping cart</h1>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      {!loading ? (
                        <img src={product.img} alt="" style={{ width: "50px" }} />
                      ) : (
                        <Skeleton variant="rectangular" width={50} height={50} />
                      )}
                    </TableCell>
                    <TableCell>
                      {!loading ? (
                        <>
                          <h2>{product.title}</h2>
                          <p>{product.description}</p>
                        </>
                      ) : (
                        <>
                          <Skeleton height={20} width="80%" />
                          <Skeleton height={20} width="80%" />
                        </>
                      )}
                    </TableCell>
                    <TableCell>
                      {!loading ? (
                        <h2>{product.quantity}</h2>
                      ) : (
                        <Skeleton height={20} width={30} />
                      )}
                    </TableCell>
                    <TableCell>
                      {!loading ? (
                        <>{product.price}</>
                      ) : (
                        <>
                          <Skeleton height={20} width={50} />
                        </>
                      )}
                    </TableCell>
                    <TableCell>
                      {!loading ? (
                        <>
                          <Button variant="contained">Save for later</Button>{" "}
                          <Button
                            onClick={() => deleteProductById(product.id)}
                            variant="outlined"
                          >
                            Remove
                          </Button>
                        </>
                      ) : (
                        <>
                          <Skeleton height={40} width={120} />
                          <Skeleton height={40} width={80} />
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>
          {!loading ? (
            <>
              <Grid container>
                <Grid item xs={6}>
                  <h2>Total price: </h2>
                </Grid>
                <Grid item xs={6}>
                  <h2>${total}.00</h2>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                <Link to="/checkout">
                  <Button variant="contained" fullWidth>Check out</Button>
              </Link>
                </Grid>
                <Grid item xs={12}>
                <Button variant="outlined" fullWidth onClick={clearCart}>
                Empty Cart
              </Button>
                </Grid>
              </Grid>
            </>
          ) : (
            <div>
              <Grid container>
                <Grid item xs={6}>
                  <h2>Total price: </h2>
                </Grid>
                <Grid item xs={6}>
                <Skeleton height={70} width={100} />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                <Link to="/checkout">
                  <Button variant="contained" fullWidth>Check out</Button>
              </Link>
                </Grid>
                <Grid item xs={12}>
                <Button variant="outlined" fullWidth onClick={clearCart}>
                Empty Cart
              </Button>
                </Grid>
              </Grid>
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CartContainer;
