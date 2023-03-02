import React from "react";

import imgs from "../../assets/imgs";
import * as FI from "react-icons/fi";
import "./style.scss";

export type PropsProduct = {
  id: any;
  img: any;
  name: string;
  price: string;
};
const Product = (item: PropsProduct) => {
  return (
    <div className="item">
      <img className="img-ideas" src={item.img} />
      <div className="item-price">
        <div className="name">
          <h4>{item.name}</h4>
          <h3>{item.price}</h3>
        </div>
        <div className="iconShop">
          <FI.FiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Product;
