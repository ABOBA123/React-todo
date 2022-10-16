import React, { useEffect, useRef, useState } from "react";
import "../styles/third.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

import Pizza from "../../static/unsplash_kfDsMDyX1K0-1.png";
import Pizza2 from "../../static/pizza2.png";
import burger from "../../static/2450 1.png";
import ramen from "../../static/3-01.png";
import cake from "../../static/6-07 1.png";
import peppironi from "../../static/image 2.png";
import icecream from "../../static/28-15.png";

import ice1 from "../../static/ice1.jpg";
import ice2 from "../../static/ice2.jpg";
import ice3 from "../../static/ice3.jpg";

import burger1 from "../../static/burger1.jpg";
import burger2 from "../../static/burger2.jpg";

import ramen1 from "../../static/ramen1.jpg";
import ramen2 from "../../static/ramen2.jpg";
import ramen3 from "../../static/ramen3.jpg";

import cake1 from "../../static/cake1.jpg";
import cake2 from "../../static/cake2.jpg";
import cake3 from "../../static/cake3.jpg";

const ThirdSlide = ({ stateRef, setStateRef }) => {
  const ref = useRef();
  useEffect(() => {
    setStateRef(ref);
  }, []);

  const [foods, setFoods] = useState([
    { id: 1, name: "Burger", img: burger },
    { id: 2, name: "Pizza", img: peppironi },
    { id: 3, name: "Cupcake", img: cake },
    { id: 4, name: "Ramen", img: ramen },
    { id: 5, name: "Icecream", img: icecream },
  ]);
  const [activeFood, setActiveFood] = useState({
    id: 2,
    name: "Pizza",
    img: peppironi,
  });

  const [foodBlocks, setFoodBlocks] = useState([
    { id: 1, name: "Sausage Pizza", price: "6.79$", img: burger1, catId: 1 },
    { id: 2, name: "Sausage Pizza", price: "6.79$", img: burger2, catId: 1 },
    { id: 3, name: "Sausage Pizza", price: "6.79$", img: ice1, catId: 5 },
    { id: 4, name: "Sausage Pizza", price: "6.79$", img: ice2, catId: 5 },
    { id: 5, name: "Sausage Pizza", price: "6.79$", img: ice3, catId: 5 },
    { id: 6, name: "Sausage Pizza", price: "6.79$", img: ramen1, catId: 4 },
    { id: 7, name: "Sausage Pizza", price: "6.79$", img: ramen2, catId: 4 },
    { id: 8, name: "Sausage Pizza", price: "6.79$", img: ramen3, catId: 4 },
    { id: 9, name: "Sausage Pizza", price: "6.79$", img: cake1, catId: 3 },
    { id: 10, name: "Sausage Pizza", price: "6.79$", img: cake2, catId: 3 },
    { id: 11, name: "Sausage Pizza", price: "6.79$", img: cake3, catId: 3 },
    { id: 10, name: "Sausage Pizza", price: "6.79$", img: Pizza, catId: 2 },
    { id: 11, name: "Sausage Pizza", price: "6.79$", img: Pizza2, catId: 2 },
  ]);

  const pizzaRef = useRef();

  const scrollTo = (isLeft) => {
    if (isLeft) {
      pizzaRef.current.scrollLeft = pizzaRef.current.offsetLeft + 436;
    } else {
      pizzaRef.current.scrollLeft = 0;
    }
  };

  return (
    <div className='slide' ref={ref}>
      <div className='container'>
        <div className='OUR_MENU'>
          <p className='color-red'>OUR MENU</p>
          <h1> Menu That Always Makes You Fall In Love</h1>{" "}
          <button
            className='slider-button slider-button-gray cursor-p'
            onClick={() => scrollTo(false)}
          >
            {"<"}
          </button>
          <button
            className='slider-button cursor-p'
            onClick={() => scrollTo(true)}
          >
            {">"}
          </button>
        </div>
        <div className='flex-row '>
          <div className='proposal'>
            {foods.map((food) => (
              <button
                onClick={() => setActiveFood(food)}
                className={
                  activeFood.id === food.id
                    ? "login big-red-button"
                    : "proposal-button white-button just-spacebet font-16 font-w500"
                }
                id={food.id}
                // className='proposal-button white-button just-spacebet font-16 font-w500'
                // onClickclassName='big-red-button '
              >
                <div
                  className={activeFood.id === food.id ? "white-outline" : ""}
                >
                  <img src={food.img} alt={food.img} />
                </div>
                <p>{food.name}</p>
              </button>
            ))}
          </div>

          <div ref={pizzaRef} className='pizza-slider flex-row '>
            {} {/* code here ----- */}
            {/* <div className='big-pizza cursor-p'>
              <img src={Pizza} alt={Pizza} />
              <div className='big-pizza-info color-white'>
                <h1>Italian Pizza</h1>
                <h1>$ 7.49</h1>
                <p>Order Now {">"}</p>
              </div>
            </div>
            <div className='big-pizza cursor-p'>
              <img src={Pizza2} alt={Pizza2} />
              <div className='big-pizza-info color-white'>
                <h1>Sausage Pizza</h1>
                <h1>$ 6.59</h1>
                <p>Order Now {">"}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSlide;
