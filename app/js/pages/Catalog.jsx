import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";

import Card from "../components/Card";
import { AppContext } from "../context";

const Catalog = ({ items, onAddToCart, onAddToWish, sort }) => {
  const [sortType, setSortType] = useState("");

  const { isLoaded } = useContext(AppContext);

  const handleChangeOption = (e) => {
    setSortType(e.target.value);
    sort(e.target.value);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title mainTitle">Все часы</h1>
        <div className="info">
          <span className="quantity">
            {isLoaded ? (
              `${items.length} товаров`
            ) : (
              <ContentLoader
                speed={2}
                width={84}
                height={22}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="8" rx="3" ry="3" width="84" height="18" />
              </ContentLoader>
            )}
          </span>
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
          {(isLoaded ? items : [...Array(8)]).map((item, index) => {
            return (
              <Card
                onAddToCart={onAddToCart}
                onAddToWish={onAddToWish}
                key={isLoaded ? item.id : index}
                {...item}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
