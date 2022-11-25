import React, { useEffect, useState } from "react";
import Cart_Item from "./cart_item";
import "./cart.css";

export default function Cart(cart_item) {
  const ids = cart_item.cart_item;
  const [cart_items, setCartItems] = useState([]);

  useEffect(() => {
    for (var i = 0; i < ids.length; i++) {
      var cart_item_link = "https://fakestoreapi.com/products/" + ids[i];
      fetch(cart_item_link)
        .then((res) => res.json())
        .then((data) => setCartItems((oldArr) => [...oldArr, data]));
    }
  }, []);

  console.log(cart_items);

  if (ids.length === 0) {
    return (
      <>
        <h2>Your saved items: </h2>
        <h2>You didn't buy anything :(</h2>
      </>
    );
  }

  return (
    <>
      <h2>Your saved items: </h2>
      <div className="cart--list">
        {cart_items.map((item) => (
          <Cart_Item
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            desc={item.description}
          />
        ))}
      </div>
    </>
  );
}
