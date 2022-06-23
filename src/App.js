import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./logo.JPG";
import cart from "./cart_img.png";
import Modal from './Modal/Modal';
import Example2 from './example';

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [orderList, SetOrderList] = useState([])

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  const addItem = (liste) => {

  }
  return (
    <main>
      
      <section className="menu section">
      <Example2 orderList={orderList} />
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Bi'Dolu Tat Menu</h2>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
          addItem={addItem()}
        />
        <Menu orderList={orderList} SetOrderList={SetOrderList} items={menuItems} />
      </section>
    </main>
  );
};

export default App;
