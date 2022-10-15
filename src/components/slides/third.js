import React, { useEffect, useRef } from "react";
import "../styles/third.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

import Pizza from "../../static/unsplash_kfDsMDyX1K0-1.png"
import burger from  "../../static/2450 1.png"
import ramen from  "../../static/3-01.png"
import cake from  "../../static/6-07 1.png"
import peppironi from  "../../static/image 2.png"
import icecream from  "../../static/28-15.png"
const ThirdSlide = ({ stateRef, setStateRef }) => {
    const ref = useRef();
    useEffect(() => {
      setStateRef(ref);
    }, []);
  
return (
    <div className="slide">
        <div className="container">
            <div className="OUR_MENU">
                <p className="color-red">OUR MENU</p>
                <h1> Menu That Always Makes You Fall In Love</h1>
            </div>
            <div className="flex-row ">
            <div className="proposal">
                <button className="white-button just-spacebet font-16 font-w500"><img src={burger} alt={burger}/><p>Burger</p></button>
                <button className="login just-spacebet font-16 font-w500"><img src={ramen} alt={ramen}/><p>ramen</p></button>
                <button className="white-button just-spacebet font-16 font-w500"><img src={cake} alt={cake}/><p>cake</p></button>
                <button className="white-button just-spacebet font-16 font-w500"><img src={peppironi} alt={peppironi}/><p>peppironi</p></button>
                <button className="white-button just-spacebet font-16 font-w500"><img src={icecream} alt={icecream}/><p>icecream</p></button>
            </div>
            <div className="pizza-slider flex-row ">
                <img className="big-pizza" src={Pizza} alt={Pizza} />
                <div className="pos-abs color-white">
                <h1>Italian Pizza</h1><h1>$ 7.49</h1><p>Order Now</p>
                </div>
                <div className="sadsa">
                <img className="big-pizza" src={Pizza} alt={Pizza}/>
                <div className="pos-abs">
                <h1>Sausage Pizza</h1><h1>$ 6.59</h1><p>Order Now</p>
                </div>
                </div>
               
            </div>
            </div>
        </div>
    </div>
);
};
export default ThirdSlide;