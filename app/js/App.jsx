import React, { useState, useContext, createContext } from "react";

import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import { AppContext } from "./context";

import images from "../images/content/*.webp";

const App = () => {
  const items = [
    {
      productId: 1,
      name: "Holzkern Bob",
      price: 20990,
      imgUrl: images[1],
    },
    {
      productId: 2,
      name: "Holzkern Giuseppe",
      price: 29990,
      imgUrl: images[2],
    },
    {
      productId: 3,
      name: "Holzkern Singapore",
      price: 119900,
      imgUrl: images[3],
    },
    {
      productId: 4,
      name: "Holzkern Manhattan",
      price: 49490,
      imgUrl: images[4],
    },
    {
      productId: 5,
      name: "Holzkern Amsterdam",
      price: 21490,
      imgUrl: images[5],
    },
    {
      productId: 6,
      name: "Holzkern Canopy",
      price: 20990,
      imgUrl: images[6],
    },
    {
      productId: 7,
      name: "Holzkern Summer Evening",
      price: 22990,
      imgUrl: images[7],
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (obj) => {
    const findItem = cartItems.find((item) => item.productId === obj.productId);
    if (findItem) {
      onRemove(obj.productId);
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== id));
  };

  const isItemInCart = (id) => {
    return cartItems.some((obj) => obj.productId === id);
  };

  return (
    <AppContext.Provider value={{ onRemove, isItemInCart }}>
      <Header cartItems={cartItems} />
      <Catalog items={items} onAddToCart={onAddToCart} />
    </AppContext.Provider>
  );
};

export default App;
