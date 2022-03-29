import React from "react";

import Card from "../components/Card";

const Catalog = ({ items }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title main-title">Все часы</h1>
        <div className="info">
          <span className="quantity">{items.length} товаров</span>
          <select className="select">
            <option style={{ display: "none" }} value>
              Сортировать по:
            </option>
            <option value="price-asc">Цена по возрастанию</option>
            <option value="price-desc">Цена по убыванию</option>
            <option value="latest">Последние поступления</option>
          </select>
        </div>
        <ul className="catalog">
          {items.map((item) => {
            return (
              <li key={item.productId}>
                <Card {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
