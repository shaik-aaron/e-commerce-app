import React from "react";
import { createContext } from "react";
import "./Card.css";

const Context = createContext();

export default function Card({ id, image, title, price }) {
  return (
    <div className="card">
      <img src={image} className="card--image" alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button className="add--button">Add Item</button>
    </div>
  );
}
