import React from "react";

const addToCart = ({ categories, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }`}
            key={index}
            onClick={() => addcart(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default addToCart;
