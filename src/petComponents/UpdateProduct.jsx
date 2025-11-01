import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { useParams, useNavigate } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageData, setImage] = useState(null);

  // 🧠 Fetch existing product details when page loads
  useEffect(() => {
    fetch(`http://localhost:8080/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name || "");
        setSpecies(data.species || "");
        setBreed(data.breed || "");
        setAge(data.age || "");
        setGender(data.gender || "");
        setPrice(data.price || "");
        setDescription(data.description || "");
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const productDetails = {
      name,
      species,
      breed,
      age,
      gender,
      price,
      description,
    };

    const formData = new FormData();
    formData.append(
      "petDto",
      new Blob([JSON.stringify(productDetails)], { type: "application/json" })
    );
    if (imageData) formData.append("file", imageData);

    try {
      const response = await fetch(
        `http://localhost:8080/api/product/updateProduct/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Product updated successfully!");
        navigate("/adminDashBoard"); 
      } else {
        alert("Failed to update product!");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="addProduct_component">
      <h1 className="addProduct_head">UPDATE PRODUCT ADMIN</h1>
      <form onSubmit={handleUpdate}>
        <label>
          Pet Name:
          <input
            type="text"
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Species:
          <input
            type="text"
            className="field"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          />
        </label>

        <label>
          Breed:
          <input
            type="text"
            className="field"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>

        <label>
          Age:
          <input
            type="text"
            className="field"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Gender:
          <input
            type="text"
            className="field"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            className="field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label>
          Description:
          <textarea
            className="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>

        <label>
          Upload Image:
          <input
            type="file"
            className="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <input
          type="submit"
          value="Update Product"
          style={{
            backgroundColor: "yellow",
            height: "2rem",
            width: "8rem",
            borderRadius: "2rem",
            marginLeft: "5rem",
            border: "none",
            marginTop: "1rem",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
}

export default UpdateProduct;
