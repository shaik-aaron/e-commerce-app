import React, { useState, useEffect } from "react";
import "./shop.css";
import Card from "./Card";

export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="shop">
      <h2>Browse through our many items: </h2>
      <div className="item--list">
        {items.map((item) => (
          <Card
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
