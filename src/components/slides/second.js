import React, { useEffect, useRef, useState } from "react";
import "../styles/second.css";
// import "../index.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

import deliveryman from "../../static/freepik--Character--inject-8.png"
import hungrywomen from "../../static/5739256 1.png"
import waiter from "../../static/Waiters-rafiki 1.png"
const SecondSlide = ({ stateRef, setStateRef }) => {
  const ref = useRef();
  useEffect(() => {
    setStateRef(ref);
  }, []);
const [drive , setdrive] = useState()

  return (
    <div className='slide' ref={ref}>
      <div className="content-secondslide container height-70">
      <div className='flex-clm  text-center '>
        <p className='color-red'>What we serve</p>
        <h1 className="secondslide-h1 just-c">Your Favorite Food Delivery Partner</h1>
      </div>
      <div className='flex-row '>
        <div className="pictures">
        <div className=' flex-clm '>
          <img className="width-200" src={hungrywomen} alt={hungrywomen}/>
          <h1>Easy To Order</h1>
          <p className="text_bottom-secondslide"> You only need a few steps in ordering food</p>
        </div>
        <div className='flex-clm'>
        <img className="width-150 cursor-p " onClick={()=> setdrive}
       src={deliveryman} alt={deliveryman} />
          <h1>Fastest Delivery</h1>
          <p className="text_bottom-secondslide"> Delivery that is always ontime even faster</p>
        </div>
        <div className='flex-clm'>
          <img className="width-200 cursor-p " src={waiter} alt={waiter}/>
          <h1>Best Quality</h1>
          <p className="text_bottom-secondslide">Not only fast for us quality is also number one</p>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default SecondSlide;
