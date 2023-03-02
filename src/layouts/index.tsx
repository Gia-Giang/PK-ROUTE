import React from "react";
import { NavLink } from "react-router-dom";

import * as BS from "react-icons/bs";
import * as AI from "react-icons/ai";
import * as FI from "react-icons/fi";
import * as MD from "react-icons/md";
import imgs from "../assets/imgs";
import route from "../router/router";
import "../layouts/style.scss";

const Layouts = () => {
  return (
    <div className="container">
      <div className="layout">
        <div className="layout-content-left">
          <img src={imgs?.logo} />
        </div>
        <div className="layout-content-center">
          {route.map((item) => (
            <NavLink to={item.path}>
              {({ isActive }) => (
                <span className={isActive ? "active-link" : undefined}>
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </div>
        <div className="layout-content-right">
          <div className="main-element">
            <div className="list-icon">
              <BS.BsFacebook className="icon" />
              <AI.AiOutlineTwitter className="icon" />
              <BS.BsInstagram className="icon" />
              <BS.BsSearch className="icon" />
            </div>
            <div className="cartWrapper">
              <div className="amount">1</div>
              <FI.FiShoppingCart className="icon" />
            </div>
            <div className="menu">
              <FI.FiMenu className="menuIcon" />
              <MD.MdCancel className="cancelIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
