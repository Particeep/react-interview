import React from "react";

import useListMovies from "../../hooks/useListMovies";
import Button from "../Button/Button";

import "./CategoriesList.scss";

export default function CategoriesList() {
  const {
    getCategoriesList,
    addCategoryFilter,
    removeCategoryFilter,
    categoriesSelectedList,
  } = useListMovies(false);
  const listCategories = getCategoriesList();
  return (
    <div className="categories-list">
      {listCategories.map((category) => {
        const isSelected = categoriesSelectedList.includes(category);
        const handleClickCat = () => {
          if (!isSelected) {
            addCategoryFilter(category);
          } else {
            removeCategoryFilter(category);
          }
        };

        return (
          <Button
            key={category + "_cat"}
            label={category}
            handleClick={() => {
              handleClickCat();
            }}
            withCrossIcon
            active={isSelected}
          />
        );
      })}
    </div>
  );
}
