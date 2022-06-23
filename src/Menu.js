import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Menu = ({ items, orderList, SetOrderList }) => {
  
const ekleme = (title, price)=> {
  SetOrderList([...orderList, {title, price}])
   console.log(orderList)
   alert("Sepete eklendi")
}
  const total = (price) => {
    price = price * 2;
    console.log(price);
    return price;
  }

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <a onClick={()=> total(price)}  className="price">₺{price}</a>
              </header>
              <p className="item-text">{desc}</p>
            </div>
            <br/>
            <Button onClick={()=> ekleme(title, price * 2)}> Siparis Ver </Button>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
