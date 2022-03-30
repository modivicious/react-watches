import React, { useEffect, useState } from "react";

import Card from "../components/Card";

const Catalog = ({ items, onAddToCart, onAddToWish, sort }) => {
  const [sortType, setSortType] = useState("");

  const handleChangeOption = (e) => {
    setSortType(e.target.value);
    sort(e.target.value);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title mainTitle">Все часы</h1>
        <div className="info">
          <span className="quantity">{items.length} товаров</span>
          <select className="select" onChange={handleChangeOption}>
            <option style={{ display: "none" }} value>
              Сортировать по:
            </option>
            <option value="price-asc">Цена по возрастанию</option>
            <option value="price-desc">Цена по убыванию</option>
            <option value="latest">Последние поступления</option>
          </select>
        </div>
        <ul className="products">
          {items.map((item) => {
            return (
              <li key={item.productId}>
                <Card
                  name={item.name}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  productId={item.productId}
                  onAddToCart={onAddToCart}
                  onAddToWish={onAddToWish}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
