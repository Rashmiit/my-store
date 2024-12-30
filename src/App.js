import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import Product from "./Product"
import Navbar from "./Navbar"
import Cart from "./Cart"
import Login from "./Login"
import Footer from "./Footer"
export const AppContext = createContext();
function App() {
  const [name,setName] = useState("Senthil")
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  return (
    <BrowserRouter>
      <AppContext.Provider value={{ name,setName, user, setUser, cart, setCart, products, setProducts }}>
      <Navbar />
      <Routes>
        <Route index element={<Product />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
      </AppContext.Provider>
    </BrowserRouter>
  );
}
export default App;