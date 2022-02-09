import React from "react";
import './Style.css'
import {BiRestaurant,BiCart} from 'react-icons/bi'
import {MdFavoriteBorder} from 'react-icons/md'
import Input from "./Input";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="upper-header">
          <div className="site-name">
            <h1><BiRestaurant/> </h1>
          </div>
          <div className="input-category">
            
            <Input/>
          </div>
          <div className="favorite">favorites<MdFavoriteBorder/></div>
          <div className="cart">Cart <BiCart/></div>
        </div>
        <div className="lower-header">
          <div className="lower-bar">Home</div>
          <div className="lower-bar">Recipes</div>
          <div className="lower-bar">Contact</div>
          <div className="lower-bar">About</div>
        </div>
      </div>
    </>
  );
}
