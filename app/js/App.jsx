import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Catalog from "./pages/Catalog";
import WishList from "./pages/WishList";
import { AppContext } from "./context";

import { API_URL } from "./apiUrl";

const App = () => {
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [wishItems, setWishItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get(`${API_URL}/products`)
          .then((response) => setAllItems(response.data));
      } catch (err) {
        alert("Произошла ошибка при запросе данных.");
        console.error(err);
      }
    }

    fetchData();
  }, []);

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
