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
    { id: 1, name: "American burger", price: "3.79$", img: burger1, catId: 1 },
    { id: 2, name: "Italian burger", price: "4.17$", img: burger2, catId: 1 },
    { id: 3, name: "Premium ice cream", price: "2.39$", img: ice1, catId: 5 },
    {
      id: 4,
      name: "Premium ice cream delux",
      price: "3.59$",
      img: ice2,
      catId: 5,
    },
    { id: 5, name: "cherry ice cream", price: "1.79$", img: ice3, catId: 5 },
    { id: 6, name: "Ramen", price: "5.49$", img: ramen1, catId: 4 },
    { id: 7, name: "Premium Ramen", price: "6.19$", img: ramen2, catId: 4 },
    { id: 8, name: "Delux Ramen", price: "5.79$", img: ramen3, catId: 4 },
    { id: 9, name: "Cake", price: "1.39$", img: cake1, catId: 3 },
    { id: 10, name: "Delux Cake", price: "1.79$", img: cake2, catId: 3 },
    { id: 11, name: "Premium Cake", price: "2.29$", img: cake3, catId: 3 },
    { id: 10, name: "Italian Pizza", price: "$ 7.49", img: Pizza, catId: 2 },
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
  const [popup, setPopup] = useState(false);
const [popupActiveImg, setPopupActiveImg] = useState(null)
  return (
    <div className='slide' ref={ref}>
      {popup && <div className='popup' onClick={()=> {setPopup(false);}}><img src={popupActiveImg} alt={popupActiveImg}/></div>}
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

          <div ref={pizzaRef} className='pizza-slider'>
            {foodBlocks.map(
              (food) =>
                food.catId === activeFood.id && (
                  <div
                    className='big-pizza cursor-p'
                    onClick={() => {setPopup(true);setPopupActiveImg(food.img)}}
                    // className={
                    //   setPopupActiveImg === true ?"asd" :"cursor-p"
                    // } 
                    >
                    <img src={food.img} alt={food.img} />
                    <div className='big-pizza-info color-white'>
                      <h1 className='color-white'>{food.name}</h1>
                      <h1 className='color-white'>{food.price}</h1>
                      <p className="color-white">Order Now {">"}</p>
                    </div>
                  </div>
                )
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSlide;
