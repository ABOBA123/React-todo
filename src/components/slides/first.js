import React from "react";
import "../styles/first.css";

import time from "../../static/time.svg";
import ellipse from "../../static/Ellipse 3.png";
import cherry from "../../static/cherry.svg";
import woman from "../../static/women.png";
import richard from "../../static/richard.png";
import phone from "../../static/phone.svg"
import pizza from "../../static/pizza.png"
import starsnone from "../../static/starsnone.svg"
import fire from "../../static/fire.svg"
import plane from "../../static/plane.svg"
import play from "../../static/play.svg"

import MainContainer from "../system/containers/main";

const FirstSlide = () => {
  return (
    <div className='slide'>
      <MainContainer style={"first-slide-wrapper"}>
        <div>
          <div className='More-then-Faster '>
            <a className='cursor-p'>More then Faster</a>
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
            <a href="https://youtu.be/R26rlxC8_PY"><div className="img-wrapper cursor-p"><img src={play} alt={play}/></div></a>
             Watch Video
            </button>
          </div>
        </div>
        <div className='Icons'>
          <img className="fire" src={fire} alt={fire}/>
          <img className="plane" src={plane} alt={plane}/>
          <img src={ellipse} alt={ellipse} />
          <img className='women' src={woman} alt={woman} />
          <div className='time'>
            <img src={time} alt={time} />
          </div>
          <div className='Rechard-Watson'>
            <div className='Rechard-Watson-img'>
              <img src={richard} alt={richard} />
            </div>
            <span>Rechard Watson</span>
            <span>Food Courier</span>
            <div className='phone-lap cursor-p'>
              <img src={phone} alt={phone}/>
            </div>
          </div>
          <div className='delivery'>
            <img className="pizza" src={pizza} alt={pizza}/>
            <div className="Italian-Pizza">
            <p >Italian Pizza</p>
            <div className="stars-row">
            <img className="stars cursor-p" src={starsnone} alt={starsnone}/>
            <img className="stars cursor-p" src={starsnone} alt={starsnone}/>
            <img className="stars cursor-p" src={starsnone} alt={starsnone}/>
            <img className="stars cursor-p" src={starsnone} alt={starsnone}/>
            <img className="stars cursor-p" src={starsnone} alt={starsnone}/>
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