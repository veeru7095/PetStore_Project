import './App.css';
import Header from './petComponents/Header';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './petComponents/Home';
import Register from './petComponents/Register';
import About from './petComponents/About';
import Cart from './petComponents/Cart';
import Login from './petComponents/Login';
import AdminDashBoard from './petComponents/AdminDashBoard';
import AddProduct from './petComponents/AddProduct';
import UpdateProduct from './petComponents/UpdateProduct';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

import { CartProvider } from './petComponents/CartContext';

function App() {

  const[cartCount,setCartCount]=useState(0);

  return (
    <div className="App">
     
      <CartProvider>
        <Header cartCount={cartCount}/>  
      <Routes>
        <Route path='/' element={<Register />} /> 
        <Route path='/home' element={<Home setCartCount={setCartCount}/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/adminDashBoard' element={<AdminDashBoard/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/updateProduct/:id' element={<UpdateProduct/>}></Route>
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
