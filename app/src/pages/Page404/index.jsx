import React from "react";

import DefaultButton from "../../components/DefaultButton";

import * as styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className="pageContentWrapper">
      <span className={styles.errorNumber}>404</span>
      <h2 className={styles.title}>Страница не найдена</h2>
      <p>
        Страница, которую вы желали посетить, могла быть удалена, ее имя
        изменилось или она временно недоступна.
      </p>
      <DefaultButton to="/">На главную</DefaultButton>
    </div>
  );
};

export default Page404;
