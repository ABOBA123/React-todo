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

const ThirdSlide = ({ stateRef, setStateRef }) => {
  const ref = useRef();
  useEffect(() => {
    setStateRef(ref);
  }, []);

  const [foods, setFoods] = useState([
    { id: 1, name: "Burger", img: burger },
    { id: 2, name: "Pizza", img: peppironi },
    { id: 1, name: "Cupcake", img: cake },
    { id: 1, name: "Ramen", img: ramen },
    { id: 1, name: "Icecream", img: icecream },
  ]);

  const [activeFood, setActiveFood] = useState({});

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
                id={food.id}
                className='proposal-button white-button just-spacebet font-16 font-w500'
                onClickclassName='big-red-button'
              >
                <img src={food.img} alt={food.img} />
                <p>{food.name}</p>
              </button>
            ))}
            {/* <button
            className='proposal-button white-button just-spacebet font-16 font-w500'
            onClickclassName='big-red-button'
          >
            <img src={burger} alt={burger} />
            <p>Burger</p>
          </button>
          <button className='proposal-button login just-spacebet font-16 font-w500 big-red-button'>
            <div className='white-outline'>
              <img src={peppironi} alt={peppironi} />
            </div>
            <p>Pizza</p>
          </button>

          <button className='proposal-button white-button just-spacebet font-16 font-w500'>
            <img src={cake} alt={cake} />
            <p>Cupcake</p>
          </button>
          <button className='proposal-button white-button just-spacebet font-16 font-w500'>
            <img src={ramen} alt={ramen} />
            <p>Ramen</p>
          </button>
          <button className='proposal-button white-button just-spacebet font-16 font-w500'>
            <img src={icecream} alt={icecream} />
            <p>Icecream</p>
          </button> */}
          </div>

          <div ref={pizzaRef} className='pizza-slider flex-row '>
            <div className='big-pizza cursor-p'>
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
            </div>
            <div className='big-pizza'>
              <img src={Pizza2} alt={Pizza2} />
              <div className='big-pizza-info color-white'>
                <h1>Sausage Pizza</h1>
                <h1>$ 6.59</h1>
                <p>Order Now</p>
              </div>
            </div>
            <div className='big-pizza'>
              <img src={Pizza2} alt={Pizza2} />
              <div className='big-pizza-info color-white'>
                <h1>Sausage Pizza</h1>
                <h1>$ 6.59</h1>
                <p>Order Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdSlide;
