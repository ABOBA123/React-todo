import React, { useEffect, useState, useRef } from "react";
import "../styles/fifth.css";
import "../../index.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

import box from "../../static/box.png";
import deliveryman from "../../static/freepik--Character--inject-8.png";
import Jeph from "../../static/Jeph .png";
import burger from "../../static/2450 1.png";
import peppironi from "../../static/image 2.png";
import cake from "../../static/6-07 1.png";
const FifthSlide = ({ stateRef, setStateRef }) => {
  const ref = useRef();
  useEffect(() => {
    setStateRef(ref);
  }, []);
  return (
    <div className='slide' ref={ref}>
      <MainContainer>
        <div className='fifth-container ping-backgraund'>
          {/* <div className='flex-row'> */}
          <div className='margin-left_100'>
            <p className='color-red'>DOWNLOAD APP</p>
            <h2 className='font-size the-fattest-text '>
              Get Started With Fudo Today!
            </h2>
            <p className='width-500'>
              Discover food wherever and whenever and get your food delivered
              quickly.
            </p>
            <button className='login font-16'>Get The App</button>
          </div>
          <div>
            {/* <div className='Rechard-Watson'>
            <div className='Rechard-Watson-img'>
              {mens &&
                mens.length &&
                mens.map((pic, index) => (
                  <img style={{ zIndex: index }} src={pic} alt={pic} />
                ))}
              <img src={richard} alt={richard} />
            </div>
            <span>Rechard Watson</span>
            <span>Food Courier</span>
            <div className='phone-lap cursor-p'>
              <img src={phone} alt={phone} />
            </div>
          </div> */}
          </div>
          <div className='red-box cursor-p'>
            <div className='white-circle'>
              <img src={box} alt={box} />
            </div>
            <p>Your Food Has Arrived</p>
          </div>
          <div className='phone-block'>
            <div className='phone-view'>
              <div className='phone-header'>
                {/* <div className="telephone-container"> */}
                <div className='four-point'></div>
                <p>California, US</p>
                <div className='four-point'>
                  <img src={Jeph} alt={Jeph} />
                </div>
              </div>
              <div className='flex-colm phone-content'>
                <div className='ping-block'>
                  <div className='flex-row alin-cent'>
                    <div className='flex-clm just-cont-flex-start'>
                      <p className='font-size-20' style={{ marginBottom: 0 }}>
                        The Fastest In Delivery{" "}
                        <span className='color-red'>Food</span>
                      </p>
                      <button className='login w-100 phone-order-now'>
                        Order Now
                      </button>
                    </div>
                    <img
                      className=' ml-20'
                      width={90}
                      src={deliveryman}
                      alt={deliveryman}
                    />
                  </div>
                </div>
                <h1>Categories</h1>
                <div className='w-150 flex-row pos-abs padd-0'>
                  <button className='login'>
                    <img className='' src={burger} alt={burger} />
                    Burger
                  </button>
                  <button className='white-button'>
                    <img className='' src={peppironi} alt={peppironi} />
                    Pizza
                  </button>
                  <button className='white-button'>
                    <img className='' src={cake} alt={cake} />
                    Cupcake
                  </button>
                </div>
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};
export default FifthSlide;
