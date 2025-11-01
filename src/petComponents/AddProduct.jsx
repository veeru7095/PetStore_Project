import React, { useState } from "react";
import './AddProduct.css'
import { useNavigate } from "react-router";

function AddProduct(){



  const [name,SetName]=useState("");
  const [species,setspecies]=useState("");
  const [breed,setBreed]=useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [price,setPrice]=useState("");
  const [description,setDescription]=useState("")
  const [imageData,setImage]=useState(null)
  const navigate=useNavigate();

  


  const handlePetDetails=async(e)=>{
    e.preventDefault();
    const petDetails={name,species,breed,age,gender,price,description};
    const formData = new FormData();
    formData.append("petDto", new Blob([JSON.stringify(petDetails)], { type: "application/json" }));
    formData.append("file", imageData);
    try{
      const response=await fetch("http://localhost:8080/api/product/addProduct",{
        method:'POST',
        body:formData
      });
      if(response.ok){
        const data=await response.json();
        alert("product added successfully")
        navigate("/adminDashBoard")
      }
      else{
        const err=await response.json()
        console.log(err);
      }

    }
    catch{
      alert("something went wrong please try after some time...")
    }
  }


  return(
    <div className="addProduct_component">
     <h1 className="addProduct_head"> ADD PRODUCT ADMIN</h1>
     <form action="" onSubmit={handlePetDetails}>
      <label htmlFor="">PetName:
        <input type="text" className="field" onChange={(e)=>SetName(e.target.value)}/>
      </label>
      <label htmlFor="">species:
        <input type="text" className="field" placeholder="Ex: Dog(or) Cat(or) Fish"  onChange={(e)=>setspecies(e.target.value)}/>
      </label>
      <label htmlFor="">Breed:
        <input type="text" className="field" placeholder="Brred Type" onChange={(e)=>setBreed(e.target.value)}/>
      </label>
      <label htmlFor="">Age:
        <input type="text" className="field" placeholder="Ex:2 years" onChange={(e)=>setAge(e.target.value)}/>
      </label>
      <label htmlFor="">Gender:
        <input type="text" className="field" placeholder="Ex: Male / Female" onChange={(e)=>setGender(e.target.value)}/>
      </label>
      <label htmlFor="">Price:
        <input type="text" className="field" placeholder="Ex: 2000" onChange={(e)=>setPrice(e.target.value)}/>
      </label>
      <label htmlFor="">Description:
        <textarea className="textarea" id="" defaultValue={"Ex:world's largest species"} onChange={(e)=>setDescription(e.target.value)}></textarea>
      </label>
      <label htmlFor="">UploadImage:
        <input type="file"  className="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </label>
      <label htmlFor="">
        <input type="submit"  style={{backgroundColor:"yellow",height:"2rem",
          width:"8rem",borderRadius:"2rem",marginLeft:"5rem",border:"none",marginTop:"1rem"
        }}/>
      </label>

     </form>
    </div>
  );
}

export default AddProduct;