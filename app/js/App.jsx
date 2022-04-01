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
        const [itemsRes, cartRes, wishRes] = await Promise.all([
          axios.get(`${API_URL}/products`),
          axios.get(`${API_URL}/cart`),
          axios.get(`${API_URL}/wish`),
        ]);
        setAllItems(itemsRes.data);
        setCartItems(cartRes.data);
        setWishItems(wishRes.data);
      } catch (err) {
        alert("Произошла ошибка при запросе данных.");
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const foundItem = findItem(cartItems, obj);
      if (foundItem) {
        await onRemoveFromCart(foundItem);
      } else {
        const { data } = await axios.post(`${API_URL}/cart`, obj);
        obj.id = data.id;
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (err) {
      alert("Произошла ошибка при добавлении в корзину.");
      console.error(err);
    }
  };

  const onAddToWish = async (obj) => {
    try {
      const foundItem = findItem(wishItems, obj);
      if (foundItem) {
        await onRemoveFromWish(foundItem);
      } else {
        const { data } = await axios.post(`${API_URL}/wish`, obj);
        obj.id = data.id;
        setWishItems((prev) => [...prev, obj]);
      }
    } catch (err) {
      alert("Произошла ошибка при добавлении в список желаний.");
      console.error(err);
    }
  };

  const findItem = (array, obj) => {
    return array.find((item) => item.productId === obj.productId);
  };

  const onRemoveFromCart = async (obj) => {
    setCartItems((prev) =>
      prev.filter((item) => item.productId !== obj.productId)
    );
    await axios.delete(`${API_URL}/cart/${obj.id}`);
  };

  const onRemoveFromWish = async (obj) => {
    setWishItems((prev) =>
      prev.filter((item) => item.productId !== obj.productId)
    );
    await axios.delete(`${API_URL}/wish/${obj.id}`);
  };

  const isItemInCart = (id) => {
    return cartItems.some((item) => item.productId === id);
  };

  const isItemInWish = (id) => {
    return wishItems.some((item) => item.productId === id);
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
        break;
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
