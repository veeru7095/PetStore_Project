import React, { useContext } from "react";
import { CartContext, CartProvider } from "./CartContext";
import './Cart.css';
import { useNavigate } from 'react-router';

function Cart(){
  const {cartItems ,removeFromCart, clearCart}=useContext(CartContext);
  const navigate=useNavigate();

  if(cartItems.length ===0){
    return <h2>your cart is empty</h2>
  }

  const totalPrice = cartItems.reduce((acc, item) => Number(acc )+ Number(item.price), 0);

  const handleCheckOut=()=>{
    alert("order Placed successFully");
    clearCart();
    navigate("/home")
  }

  return(
    <div className="cart_Component">
      <h2>Your cart</h2>
      <div className="cart_grid">
        {
          cartItems.map((item)=>(
            <div key={item.id} className="cart_item">
              <img src={`http://localhost:8080/api/product/getImage/${item.id}`} alt="cartImage" className="cart_image" />
              <div className="cart_details">
              <h3>{item.name}</h3>
              <p>Breed: {item.breed}</p>
              <p>Price: ₹{item.price}</p>
            </div>
            <div className="btn">
              <button
              className="remove_btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remove 
            </button>
            </div>
            </div>
          ))
        }
      </div>
      {
        cartItems.length > 0 && (
          <div className="checkout">
            <h2>totalPrice:{totalPrice}</h2>
       <button className="checkout_btn" onClick={handleCheckOut}> checkout</button>
      </div>
        )
      }
    </div>
  );
}

export default Cart;
