import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Card from "../../components/Card";
import Title from "../../components/Title";
import { AppContext } from "../../context";

import * as styles from "./WishList.module.scss";

const WishList = ({ items, onAddToCart, onAddToWish }) => {
  const { isLoaded } = useContext(AppContext);

  return (
    <>
      <Title text="Список желаемого" />
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
              <div className="pageContentWrapper">
                <span className={styles.icon}></span>
                <h2 className={styles.title}>Ваш список желаемого пуст.</h2>
                <p>Но мы надеемся, что вы найдете себе что-то по душе.</p>
                <Link className="linkBtn" to="/">
                  В каталог
                </Link>
              </div>
            ))}
        </>
      </CSSTransition>
    </>
  );
};

export default WishList;
