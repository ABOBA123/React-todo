import React, { useEffect, useRef, useState } from "react";
import "../styles/first.css";
import dayjs from "dayjs";

import time from "../../static/time.svg";
import ellipse from "../../static/Ellipse 3.png";
import cherry from "../../static/cherry.svg";
import woman from "../../static/women.png";
import richard from "../../static/richard.png";
import phone from "../../static/phone.svg";
import pizza from "../../static/pizza.png";
import starsnone from "../../static/starsnone.svg";
import statsactive from "../../static/bx_bxs-star.png";
import fire from "../../static/fire.svg";
import plane from "../../static/plane.svg";
import play from "../../static/play.svg";

import firstUser from "../../static/users/Ellipse 5.png";
import secondUser from "../../static/users/Ellipse 6.png";
import thirdUser from "../../static/users/Ellipse 7.png";

import fourUser from "../../static/users/Group 54.png";
import fiveUser from "../../static/users/Group 55.png";
import sixUser from "../../static/users/Group 56.png";

import MainContainer from "../system/containers/main";

const FirstSlide = ({ stateRef, setStateRef }) => {
  // const [pizza, setpizza] = useState([])
  const [reviews, setReviews] = useState([]);
  const [reviewsChanged, setReviewsChanged] = useState(dayjs().format());

  const [star, setStar] = useState(0);

  const ref = useRef();
  const [mens, setmens] = useState([]);
  const [mensChanged, setmensChanged] = useState(dayjs().format());
  useEffect(() => {
    mens && mens.length && mens[0] === fire
      ? setmens([fire])
      : setmens([richard]);

    setTimeout(() => setmensChanged(dayjs().format()), 20000);
  }, []);
  // const [pizza, setpizza] = useState([])
  // useEffect(()=>{
  //   pizza && pizza.length && pizza[0] === peperoni
  //   ? setpizza([pizza])
  //   : setpizza([peperoni])
  // })
  useEffect(() => {
    reviews && reviews.length && reviews[0] === firstUser
      ? setReviews([fourUser, fiveUser, sixUser])
      : setReviews([firstUser, secondUser, thirdUser]);

    setTimeout(() => setReviewsChanged(dayjs().format()), 20000);
  }, [reviewsChanged]);

  useEffect(() => {
    setStateRef(ref);
  }, []);

  const setNewStarFromHover = (num) => {
    setStar(num);
  };

  return (
    <div className='slide' ref={ref}>
      <MainContainer style={"first-slide-wrapper"}>
        <div className='first-slide-slogan'>
          <div className='More-then-Faster '>
            <a className='cursor-p color-red '>More then Faster</a>
            <img src={cherry} alt={cherry} />
          </div>
          <h3 className='fat-text'>
            Be The Fastest In Delivering your
            <span className='color-red'>Food</span>
          </h3>
          <p className='fat-text_description'>
            Our job is to filling your tummy with delicious food and with fast
            and free delivery
          </p>
          <div className='flex-row'>
            <button className='login cursor-p'>Get Started</button>
            <button className='white-button'>
              <a href='https://youtu.be/R26rlxC8_PY'>
                <div className='img-wrapper cursor-p'>
                  <img src={play} alt={play} />
                </div>
              </a>
              Watch Video
            </button>
          </div>
          <div className='first-slide-reviews'>
            {reviews &&
              reviews.length &&
              reviews.map((pic, index) => (
                <img
                  className='first-slide-review-img'
                  style={{ zIndex: index, left: index * 40 }}
                  src={pic}
                  alt={pic}
                />
              ))}
          </div>
        </div>
        <div className='Icons'>
        {/* <div className="red-cube">dasdasd</div> */}
          <img className='fire' src={fire} alt={fire} />
          <img className='plane' src={plane} alt={plane} />
          <img src={ellipse} alt={ellipse} />
          <img className='women' src={woman} alt={woman} />
          <div className='time'>
            <img src={time} alt={time} />
          </div>
          <div className='Rechard-Watson'>
            <div className='Rechard-Watson-img'>
              {mens &&
                mens.length &&
                mens.map((pic, index) => (
                  <img style={{ zIndex: index }} src={pic} alt={pic} />
                ))}
              {/* <img src={richard} alt={richard} /> */}
            </div>
            <span>Rechard Watson</span>
            <span>Food Courier</span>
            <div className='phone-lap cursor-p'>
              <img src={phone} alt={phone} />
            </div>
          </div>
          <div className='delivery'>
            <img className='pizza' src={pizza} alt={pizza} />
            <div className='Italian-Pizza'>
              <p>Italian Pizza</p>
              <div className='stars-row'>
                <img
                  className='stars cursor-p'
                  src={star >= 1 ? statsactive : starsnone}
                  alt={starsnone}
                  onMouseEnter={() => setNewStarFromHover(1)}
                />
                <img
                  className='stars cursor-p'
                  src={star >= 2 ? statsactive : starsnone}
                  alt={starsnone}
                  onMouseEnter={() => setNewStarFromHover(2)}
                />
                <img
                  className='stars cursor-p'
                  src={star >= 3 ? statsactive : starsnone}
                  alt={starsnone}
                  onMouseEnter={() => setNewStarFromHover(3)}
                />
                <imgs
                  className='stars cursor-p'
                  src={star >= 4 ? statsactive : starsnone}
                  alt={starsnone}
                  onMouseEnter={() => setNewStarFromHover(4)}
                />
                <img
                  className='stars cursor-p'
                  src={star >= 5 ? statsactive : starsnone}
                  alt={starsnone}
                  onMouseEnter={() => setNewStarFromHover(5)}
                />
              </div>
              <p>
                <span className='color-red'>$</span>7.49
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default FirstSlide;
