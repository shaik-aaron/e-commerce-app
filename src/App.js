import React, { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  const [cart_item_id, setCartItemId] = useState();

  const shopToApp = (cart_item_data) => {
    setCartItemId(cart_item_data);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <Link className="flopkart--link" to="/">
            <FontAwesomeIcon className="shopping--cart" icon={faShoppingCart} />
            <h1>Flopkart</h1>
          </Link>
          <Link className="cart--link" to="/cart">
            <button className="cart--button">Cart</button>
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Shop shopToApp={shopToApp} />} />
        <Route path="/cart" element={<Cart cart_item={cart_item_id} />} />
      </Routes>
    </>
  );
}
