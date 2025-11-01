import React, { useContext, useEffect, useState } from "react";
import './Home.css';
import { useNavigate } from "react-router";
import  axios  from 'axios';
import { CartContext } from "./CartContext";


function Home() {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  

  useEffect(()=>{
    axios.get("http://localhost:8080/api/product/allProducts")
    .then((response)=>{
      console.log(response.data)
      setproducts(response.data)
    })
    .catch((err)=>{
      console.log("error fetching products : "+err)
    })


  },[])
  

  return (
    <div className="home_component">
      <img
        src="/images/dashboard.jpg"
        alt="Dashboard"
        className="image"
        width="300px"
        onClick={() => navigate("/register")}
      />


      <div className="product_grid">
        {products.map((product) => (
          <div key={product.id} className="product_card">
            <img
              src={`http://localhost:8080/api/product/getImage/${product.id}`}
              alt={product.name}
              className="product_image"
            />

            <div className="product_details">
              <h3>{product.name}</h3>
              <p>Species: {product.species}</p>
              <p>Breed: {product.breed}</p>
              <p>Age: {product.age} year</p>
              <p>Desc:{product.description}</p>
              <p>Price: ₹{product.price}</p>
            </div>
            
            <div className="home_btn">
              <button onClick={() => alert("AddCart then Buy it")} className="home_btn_buyNow">Buy Now</button>
              <button onClick={() => addToCart(product)} className="home_btn_add_cart">Add Cart</button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
