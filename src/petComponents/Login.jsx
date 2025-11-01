import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router";

function Login(){

  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const loginDetails={userName,password};

  const handleLoginDetails=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:8080/api/auth/login",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify(loginDetails)
      })
      if(response.ok){
        const data=await response.json();
        if(data.role === "admin"){
          navigate("/adminDashBoard")
        }
        else if(data.role ==="user"){
          navigate("/home")
        }
      } 
      else{
        alert("please register First")
        navigate("/register")
      }

    }
    catch{
      alert("login UnsuccessFul");
    }

  }

  return(
    <div className="login_container">
      <h1 className="login_head">Login Page</h1>
      <form onSubmit={handleLoginDetails}>
        <label htmlFor="">UserName:
          <input type="text" className="field" onChange={(e)=>setUserName(e.target.value)} />
        </label>
        <label htmlFor="">Password:
          <input type="password"  className="field" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <label htmlFor="">
          <input type="submit" className="login-btn"/>
        </label>
      </form>
    </div>
  );
}

export default Login;