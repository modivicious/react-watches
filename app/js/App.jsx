import React from "react";

import Header from "./components/Header";
import Catalog from "./pages/Catalog";

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

  return (
    <>
      <Header />
      <Catalog items={items} />
    </>
  );
};

export default App;
