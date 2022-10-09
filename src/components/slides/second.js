import React, { useEffect, useRef } from "react";
import "../styles/second.css";
// import "../index.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

const SecondSlide = ({ stateRef, setStateRef }) => {
  const ref = useRef();
  useEffect(() => {
    setStateRef(ref);
  }, []);

  return (
    <div className='slide heigh-70' ref={ref}>
      <div className='flex-clm text-center'>
        <p className='color-red'>What we serve</p>
        <h1>Your Favorite Food Delivery Partner</h1>
      </div>
      <div className='flex-row '>
        <div className='flex-clm'>
          <img src='' />
          <h1></h1>
          <p></p>
        </div>
        <div className='flex-clm'>
          <img src='' />
          <h1></h1>
          <p></p>
        </div>
        <div className='flex-clm'>
          <img src='' />
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default SecondSlide;
