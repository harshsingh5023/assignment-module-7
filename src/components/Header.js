import React, {useState} from "react";
import "./header.css";
import Person from "../resources/Vector.svg";
import Search from "../resources/search.svg";
import Cart from "../resources/cart.svg";
import Heart from "../resources/heart.svg";

function Header(props) {
  return (
    <div className="h-wrapper">
      <p className="h-logo">AccioJob</p>
      <div className="h-menu">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </div>
      <div className="h-second">
        <div className="h-login">
          <a href="/">
            
            <img src={Person} alt="" />
            <span>Login / Register</span>
          </a>
        </div>
        <div className="h-search">
          <a href="/">
            <img src={Search} alt="" />
          </a>
        </div>
        <div className="h-cart">
          <a href="/">
            <img src={Cart} alt="" />
            <span>{props.cartItem}</span>
          </a>
        </div>
        <div className="h-heart">
          <a href="/">
            <img src={Heart} alt="" />
            <span> 1</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
