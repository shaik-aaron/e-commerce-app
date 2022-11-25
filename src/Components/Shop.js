import React, { useState, useEffect } from "react";
import "./shop.css";
import Card from "./Card";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Shop({ shopToApp }) {
  const [items, setItems] = useState([]);
  const [id, setId] = useState([]);

  const cardToShop = (cart_id) => {
    toast("Item Added to Cart!");
    setId((oldArr) => [...oldArr, cart_id]);
  };

  shopToApp(id);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=15")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="shop">
        <h2>Browse through our MILLIONS of items: </h2>
        <div className="item--list">
          {items.map((item) => (
            <Card
              cardToShop={cardToShop}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
