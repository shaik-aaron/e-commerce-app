import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Card.css";

export default function Card({ cardToShop, id, image, title, price }) {
  return (
    <div className="card">
      <img src={image} className="card--image" alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button className="add--button" onClick={() => cardToShop(id)}>
        Add Item
      </button>
      <ToastContainer />
    </div>
  );
}
