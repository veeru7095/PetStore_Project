import React from "react";
import './About.css'
import { useNavigate } from "react-router";

function About(){
  const navigate=useNavigate();
  return(
    <div className="about_component">
      <h2>ABOUT PAGE</h2>
      <p>
        Welcome to PawHeaven Pet Store, your one-stop destination for all things pets! 🐶🐱🐠🦜
      We believe every pet deserves love, care, and a happy home. <br />
      Our mission is to connect pet lovers with healthy, well-cared-for animals and provide quality products that make pet parenting easier and more joyful.
      </p>
      <br />

      <p>
        From playful puppies and gentle kittens to colorful birds and fish, we offer a wide variety of pets raised in a safe, nurturing environment. <br />Our team is passionate about animal welfare and ensures each pet is healthy, vaccinated, and ready for adoption.
        <br />
        Because at PawHeaven — “Every Tail Deserves a Happy Tale.” 🐾
      
      </p>
      <button className="about_btn" onClick={()=>navigate("/register")}>VISIT PAGE</button>
    </div>
  );
}

export default About;