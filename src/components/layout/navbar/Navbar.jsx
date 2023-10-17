
import "./Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget";
import {Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <div className={"navBar"}>
        <Link to="/">
          <h4>RENKENDO</h4>
        </Link>
        <ul className="menuBar">
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
        <CartWidget/>
    </div>
    </>
  )
}



