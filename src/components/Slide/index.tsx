import React from "react";

import { AiFillCaretRight } from "react-icons/ai";
import imgs from "../../assets/imgs";
import "./style.scss";

const Slider = () => {
  return (
    <div
      className="slider"
      style={{
        background: `url(${imgs.idea1})`,
      }}
    >
      <div className="content">
        <span className="title">New collection</span>
        <h2 className="heading">Lights & Decor</h2>
        <div className="moreWrapper">
          <span className="moreText">Show more</span>
          <AiFillCaretRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;
