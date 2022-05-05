import React from "react";

const SortSelect = ({ onChange }) => {
  return (
    <select className="select" onChange={onChange}>
      <option style={{ display: "none" }} value>
        Сортировать по:
      </option>
      <option value="price-asc">Цена по возрастанию</option>
      <option value="price-desc">Цена по убыванию</option>
      <option value="latest">Последние поступления</option>
    </select>
  );
};

export default SortSelect;
