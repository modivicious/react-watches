import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import WishList from "./pages/WishList";
import { AppContext } from "./context";

import images from "../images/content/*.webp";

const App = () => {
  const items = [
    {
      productId: 1,
      name: "Holzkern Bob",
      price: 20990,
      imgUrl: images[1],
      receiptDate: "2022-03-26",
    },
    {
      productId: 2,
      name: "Holzkern Giuseppe",
      price: 29990,
      imgUrl: images[2],
      receiptDate: "2022-03-26",
    },
    {
      productId: 3,
      name: "Holzkern Singapore",
      price: 119900,
      imgUrl: images[3],
      receiptDate: "2022-03-26",
    },
    {
      productId: 4,
      name: "Holzkern Manhattan",
      price: 49490,
      imgUrl: images[4],
      receiptDate: "2022-03-27",
    },
    {
      productId: 5,
      name: "Holzkern Amsterdam",
      price: 21490,
      imgUrl: images[5],
      receiptDate: "2022-03-27",
    },
    {
      productId: 6,
      name: "Holzkern Canopy",
      price: 20990,
      imgUrl: images[6],
      receiptDate: "2022-03-28",
    },
    {
      productId: 7,
      name: "Holzkern Summer Evening",
      price: 22990,
      imgUrl: images[7],
      receiptDate: "2022-03-26",
    },
  ];

  const [allItems, setAllItems] = useState([...items]);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  const onAddToCart = (obj) => {
    if (findItem(cartItems, obj)) {
      onRemoveFromCart(obj.productId);
    } else {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onAddToWish = (obj) => {
    if (findItem(wishItems, obj)) {
      onRemoveFromWish(obj.productId);
    } else {
      setWishItems((prev) => [...prev, obj]);
    }
  };

  const findItem = (array, obj) => {
    return array.find((item) => item.productId === obj.productId);
  };

  const onRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== id));
  };

  const onRemoveFromWish = (id) => {
    setWishItems((prev) => prev.filter((item) => item.productId !== id));
  };

  const isItemInCart = (id) => {
    return cartItems.some((obj) => obj.productId === id);
  };

  const isItemInWish = (id) => {
    return wishItems.some((obj) => obj.productId === id);
  };

  const sortAllItems = (sortType) => {
    switch (sortType) {
      case "price-asc":
        setAllItems((prev) => prev.sort((a, b) => a.price - b.price));
        break;
      case "price-desc":
        setAllItems((prev) => prev.sort((a, b) => b.price - a.price));
        break;
      case "latest":
        setAllItems((prev) =>
          prev.sort(
            (a, b) => Date.parse(b.receiptDate) - Date.parse(a.receiptDate)
          )
        );
    }
  };

  return (
    <AppContext.Provider
      value={{ onRemoveFromCart, isItemInCart, isItemInWish }}
    >
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <Catalog
              items={allItems}
              onAddToCart={onAddToCart}
              onAddToWish={onAddToWish}
              sort={sortAllItems}
            />
          }
        />
        <Route
          path="wishlist"
          element={
            <WishList
              items={wishItems}
              onAddToCart={onAddToCart}
              onAddToWish={onAddToWish}
            />
          }
        />
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
