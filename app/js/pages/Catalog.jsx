import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader";

import Card from "../components/Card";
import SortSelect from "../components/SortSelect";
import Title from "../components/Title";
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
        <Title text="Все часы" />
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
          <SortSelect onChange={handleChangeOption} />
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
