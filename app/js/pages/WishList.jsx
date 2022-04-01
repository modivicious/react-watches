import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import * as styles from "./WishList.module.scss";

const WishList = ({ items, onAddToCart, onAddToWish }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title mainTitle">Список желаний</h1>
        {items.length ? (
          <ul className="products">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <Card
                    name={item.name}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    receiptDate={item.receiptDate}
                    id={item.id}
                    productId={item.productId}
                    onAddToCart={onAddToCart}
                    onAddToWish={onAddToWish}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <div className={styles.noItems}>
            <span className={styles.icon}></span>
            <h2 className={styles.title}>Ваш список желаний пуст.</h2>
            <p>Но мы надеемся, что вы найдете себе что-то по душе.</p>
            <Link className="linkBtn" to="/">
              В каталог
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
