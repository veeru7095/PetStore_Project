import React, { useState } from "react";

import  './Register.css';
import { Link, useNavigate } from "react-router";

function Register(){

  const [userName,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  const navigate=useNavigate();

  const users={userName,email,password,role};

  const UserHandler=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:8080/api/auth/register",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify(users)
      })
      if(response.ok){
        const data=await response.json();
        alert("Registration successful ")
        navigate("/login")
      }
      else{
        const err=await response.json();
        alert("registration unsuccessful..")
      }

    }
    catch{
      alert("unsuccessfull")

    }
    
  }

  return(
    <div className="register_component">

      <h1 className="register_head">REGISTRATION PAGE</h1>

      <form action="" onSubmit={UserHandler}>
        <label htmlFor="">Username :
        <input type="text" className="feild" onChange={(e)=>setUserName(e.target.value)}/>
      </label>

        <label htmlFor="">Useremail :
        <input type="email" className="feild" onChange={(e)=>setEmail(e.target.value)}  />
      </label>

        <label htmlFor="">password :
        <input type="password" className="feild" onChange={(e)=>setPassword(e.target.value)} />
      </label>

       <label htmlFor="">UserRole :
        <input type="text" className="feild" onChange={(e) => setRole(e.target.value)} />
      </label>

      <label htmlFor="">
        <input type="submit" className="register_btn" />
      </label>

      </form>
      <p className="login_link">
        Already have an account? {" "}
        <Link to="/login">Login</Link>
      </p>

        
      
    </div>
  );
}

export default Register;