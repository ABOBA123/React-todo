import React, { useEffect, useRef } from "react";
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
          <button onClick={() => scrollTo(false)}>{"<"}</button>
          <button onClick={() => scrollTo(true)}>{">"}</button>
        </div>
        <div className='flex-row '>
          <div className='proposal'>
            <button className='white-button just-spacebet font-16 font-w500'>
              <img src={burger} alt={burger} />
              <p>Burger</p>
            </button>
            <button className='login just-spacebet font-16 font-w500'>
              <img src={ramen} alt={ramen} />
              <p>ramen</p>
            </button>
            <button className='white-button just-spacebet font-16 font-w500'>
              <img src={cake} alt={cake} />
              <p>cake</p>
            </button>
            <button className='white-button just-spacebet font-16 font-w500'>
              <img src={peppironi} alt={peppironi} />
              <p>peppironi</p>
            </button>
            <button className='white-button just-spacebet font-16 font-w500'>
              <img src={icecream} alt={icecream} />
              <p>icecream</p>
            </button>
          </div>

          <div ref={pizzaRef} className='pizza-slider flex-row '>
            <div className='big-pizza'>
              <img src={Pizza} alt={Pizza} />
              <div className='big-pizza-info color-white'>
                <h1>Italian Pizza</h1>
                <h1>$ 7.49</h1>
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
