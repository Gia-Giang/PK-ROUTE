import React from "react";

import { PropsProduct } from "../../components/Product";
import imgs from "../../assets/imgs";
import Product from "../../components/Product";
import Slider from "../../components/Slide";
import Procedure from "./components/Proceduce";
import "./style.scss";

const dataProduct: any = [
  {
    id: 0,
    img: imgs.ideal8,
    name: "Table succulent plant",
    price: "£5.00",
  },
  {
    id: 1,
    img: imgs.ideal1,
    name: "Metallic sidetable lamp",
    price: "£5.00",
  },
  {
    id: 2,
    img: imgs.ideal2,
    name: "Wooden picture frame",
    price: "£5.00",
  },
  {
    id: 3,
    img: imgs.ideal3,
    name: "Bedroom mirror",
    price: "£5.00",
  },
  {
    id: 4,
    img: imgs.ideal4,
    name: "Minimalistic chair",
    price: "£5.00",
  },
  {
    id: 5,
    img: imgs.ideal5,
    name: "Cactus succulent plant",
    price: "£5.00",
  },
  {
    id: 6,
    img: imgs.ideal6,
    name: "Decorative pillow",
    price: "£5.00",
  },
  {
    id: 7,
    img: imgs.ideal7,
    name: "Metallic table lamp",
    price: "£5.00",
  },
];
const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-left">
          <div className="titleWrapper">
            <span className="title">New collection</span>
            <h2 className="heading">Fill your home with uniqueness</h2>
            <h2 className="heading-small">Huge variety with modern glamour!</h2>
          </div>
        </div>
        <div className="banner-right">
          <img src={imgs.heading} className="heading-img" />
        </div>
      </div>
      <div className="discount">
        <p>
          ! Use discount code: FIRSTIME to get{" "}
          <span style={{ color: "#ff7012" }}>10% off</span> your first order !
        </p>
      </div>
      <div className="sliderWrapper">
        <Slider />
        <Slider />
        <Slider />
      </div>
      <div className="listLogo"></div>
      <div className="OurSpecialOffer">
        <div className="imgTreeLight">
          <img src={imgs.treeLight} />
        </div>
        <div className="content">
          <span className="heading-small">Our special offer</span>
          <h1 className="heading">
            Featured products with amazing color variety for your home
          </h1>
          <button className="btn-pur">Purchare</button>
        </div>
      </div>
      <div className="procedure">
        <Procedure />
        <Procedure />
        <Procedure />
      </div>
      <div className="ideas">
        <h1 className="heading">Ideas for inspiration</h1>
        <img src={imgs.idea} />
        <div className="ideas-bottom">
          <div className="ideas-title">
            <h2 className="heading-mall">
              Find the closest store to your location
            </h2>
            <span>
              Quisque ut aliquam nunc, at finibus ante. Sed dignissim, nulla a
              fermentum egestas, odio
            </span>
          </div>
          <button className="btn-pur">Find now</button>
        </div>
      </div>
      <div className="greatIdeas">
        <h1 className="heading">Ideas for inspiration</h1>
        <div className="itemWrapper">
          {dataProduct.map((item: PropsProduct) => (
            <Product {...item} />
          ))}
        </div>
      </div>
      <div className="join">
        <h1 className="heading">Join the newsletter</h1>
        <span className="heading-mall">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        </span>
        <div className="inputWrapper">
          <input placeholder="please enter your email here..." />
          <button className="btn-pur">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
