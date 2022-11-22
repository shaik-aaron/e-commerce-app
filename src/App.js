import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import "./app.css";

export default function App() {
  return (
    <>
      <nav>
        <div className="navbar">
          <Link className="flopkart--link" to="/">
            <FontAwesomeIcon icon={faCartShopping} className="shopping--cart" />
            <h1 className="flopkart">Flopkart</h1>
          </Link>
          <Link className="cart--link" to="/cart">
            <button className="cart--button">Cart</button>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
