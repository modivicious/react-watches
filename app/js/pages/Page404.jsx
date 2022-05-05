import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className={styles.page404}>
          <span className={styles.errorNumber}>404</span>
          <h2 className={styles.title}>Страница не найдена</h2>
          <p>Страница, которую вы желали посетить, могла быть удалена, ее имя изменилось или она временно недоступна.</p>
          <Link className="linkBtn" to="/">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
