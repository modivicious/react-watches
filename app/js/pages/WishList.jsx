import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Card from "../components/Card";
import { AppContext } from "../context";

import * as styles from "./WishList.module.scss";

const WishList = ({ items, onAddToCart, onAddToWish }) => {
  const { isLoaded } = useContext(AppContext);

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title mainTitle">Список желаний</h1>

        <CSSTransition
          in={isLoaded}
          timeout={500}
          classNames="fade-in"
          unmountOnExit
        >
          <>
            {isLoaded &&
              (items.length ? (
                <ul className="products">
                  {items.map((item) => {
                    return (
                      <Card
                        onAddToCart={onAddToCart}
                        onAddToWish={onAddToWish}
                        key={item.id}
                        {...item}
                      />
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
              ))}
          </>
        </CSSTransition>
      </div>
    </div>
  );
};

export default WishList;
