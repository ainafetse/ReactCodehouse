
import "./Navbar.css";
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import CartWidget from '../../common/cartWidget/CartWidget';

const navbarStyle = {
  backgroundColor: 'secondary',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const listStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
};

export const Navbar = () => {
  return (
    <div className="boxedContainer">
    <Grid container style={navbarStyle}>
      {/* Website Name */}
      <Grid item xs={12} lg={3} md={4} sm={6} className="logoContainer">
        <Link to="/">
          <h4>RENKENDO</h4>
        </Link>
      </Grid>

      {/* Menu Items */}
      <Grid item xs={12} lg={8} md={4} sm={12}>
        <ul style={listStyle} className="menuBar">
          <Link to="/">
            <li>All</li>
          </Link>
          <Link to="/category/shirts">
            <li>Shirts</li>
          </Link>
          <Link to="/category/prints">
            <li>Prints</li>
          </Link>
        </ul>
      </Grid>

      {/* Cart Widget */}
      <Grid item xs={12} lg={1} md={4} sm={6}>
        <CartWidget />
      </Grid>
    </Grid>
    </div>
  );
};


