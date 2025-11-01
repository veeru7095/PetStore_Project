import React, { useContext } from "react";
import  './Header.css';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartContext } from "./CartContext";

function Header(){
  const {cartCount}=useContext(CartContext)
  return(
    <div className="headerComponent">
      <h1 className="headerName">
        <i className='fas fa-paw' style={{fontSize:"24px",marginRight:"1rem"}}></i>Pawfect Pets</h1>
      <ul className="header-list">
      <Link className="link" to="/">HOME</Link>
      <Link className="link" to="/register">REGISTER</Link>
      <Link className="link" to="/about">ABOUT</Link>
      <Link className="link" to="/cart"> <i className="fa fa-shopping-cart" style={{fontSize:"24px"}}></i><span className="cart_count">CART{cartCount}</span></Link>
     
      </ul>
    </div>
  );
}

export default Header;