import React, { useEffect, useState } from "react";
import './AdminDashBoard.css';
import { useNavigate } from "react-router";
import axios from "axios";

function AdminDashBoard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:8080/api/product/allProducts")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log("Error fetching products:", err));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`http://localhost:8080/api/product/deleteProduct/${id}`);
      alert("Product deleted successfully!");
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="adminDashBoard_component">
      <img src="/images/dashboard.jpg" alt="img" className="image" width="300px" />
      <button className="admin_btn" onClick={() => navigate("/addProduct")}>Add Product</button>
    
      <div className="home_component">
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
                <p ><span style={{fontWeight:700}}>Species: </span>{product.species}</p>
                <p><span style={{fontWeight:700}}>Breed: </span>{product.breed}</p>
                <p><span style={{fontWeight:700}}>Age:</span> {product.age} years</p>
                <p><span style={{fontWeight:700}}>Desc :</span> {product.description}</p>
                <p><span style={{fontWeight:700}}>Price: ₹</span>{product.price}</p>
              </div>

              <div className="home_btn">
                <button
                  onClick={() => navigate(`/updateProduct/${product.id}`)}
                  className="home_btn_buyNow"
                  style={{ backgroundColor: "green" }}
                >
                  Update Product
                </button>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="home_btn_add_cart"
                  style={{ backgroundColor: "red" }}
                >
                  Delete Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
