import React from "react";
import "./cart_item.css";

export default function Cart_Item({ id, image, title, price, desc }) {
  return (
    <div className="cart--items">
      <img src={image} className="cart--image" alt={title} />
      <div className="cart--details">
        <h4>{title}</h4>
        <p>Price: ${price}</p>
        <hr></hr>
        <p>{desc}</p>
      </div>
    </div>
  );
}
