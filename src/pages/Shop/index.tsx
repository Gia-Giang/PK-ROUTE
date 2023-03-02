import React from "react";

import { Select } from "antd";
import * as AI from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";

const Shop = () => {
  let location = useLocation();
  const getPath = location.pathname.split("/").join();

  const onChange = (value: string) => {};
  const onSearch = (value: string) => {};

  return (
    <div className="shop">
      <div className="header">
        <h1 className="header-text">Shop</h1>
        <div className="header-right">
          <NavLink to={"/"}>Home</NavLink>
          <AI.AiOutlineRight />
          <span>{getPath}</span>
        </div>
      </div>
      <div className="productWrapper">
        <div className="product">
          <div className="search">
            <Select
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
        </div>
        <div className="categories"></div>
      </div>
    </div>
  );
};

export default Shop;
