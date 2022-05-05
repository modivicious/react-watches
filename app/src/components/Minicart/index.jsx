import React, { useContext } from "react";

import DefaultButton from "../DefaultButton";
import { AppContext } from "../../context";

import * as styles from "./Minicart.module.scss";

const Minicart = ({ items, close }) => {
  const { onRemoveFromCart } = useContext(AppContext);

  const onCross = (item) => {
    onRemoveFromCart(item);
    items.length < 2 && close();
  };

  return (
    <div className={styles.minicart}>
      <ul className={styles.products}>
        {items.map((item) => {
          return (
            <li className={styles.item} key={item.productId}>
              <img className={styles.img} src={item.imgUrl} alt="Фото товара" />
              <a href="#">
                <div>{item.name}</div>
              </a>
              <div className={styles.price}>{item.price} руб.</div>
              <button className={styles.remove} onClick={() => onCross(item)}>
                <span className="visuallyHidden">Удалить из корзины</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className={styles.total}>
        <span className={styles.totalText}>Итого:</span>
        <span>{items.reduce((sum, item) => sum + item.price, 0)} руб.</span>
      </div>
      <div className={styles.checkout}>
        <DefaultButton onClick={() => alert("Заказ оформлен. Хорошего дня!")}>
          Оформить заказ
        </DefaultButton>
      </div>
    </div>
  );
};

export default Minicart;
