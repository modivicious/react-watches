import React from "react";

import * as styles from "./Card.module.scss";

const Card = ({ name, price, imgUrl }) => {
  return (
    <div className={styles.card}>
      <a className={styles.imageLink} href="#">
        <img className={styles.image} src={imgUrl} alt="Фото продукта" />
      </a>
      <div className={styles.descr}>
        <a className={styles.link} href="#">
          <h3 className={styles.name}>{name}</h3>
        </a>
        <div className={styles.bottom}>
          <span className={styles.price}>{price} руб.</span>
          <div className={styles.buttons}>
            <button className={styles.wish} type="button">
              <span className="visually-hidden">Добавить в желаемое</span>
            </button>
            <button className={styles.cart} type="button">
              <span className="visually-hidden">Добавить в корзину</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
