import React, { useEffect, useState, useRef} from "react";
import "../styles/fourth.css";
import "../../index.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

import rhomb from "../../static/romb.png";
import shef from "../../static/shef.png";
import onion1 from "../../static/onion1 .png";
import onion from "../../static/onion.png";
import popcorn from "../../static/popcorn.png";
import salat1 from "../../static/salat 1.png";
import salat2 from "../../static/salat 2.png";
import firstUser from "../../static/users/Ellipse 5.png";
// useEffect(()=>{

// })

const FourthSlide = ({ stateRef, setStateRef }) => {
    const ref = useRef();
    useEffect(() => {
      setStateRef(ref);
    }, []);
    return (
        <div className="slide" ref={ref} >
            <div className="container">
                <div className="flex-row ">
                <div className="kitchen">
                <img className="rhomb" src={rhomb} ale={rhomb}/>
                <img className="shef" src={shef} ale={shef}/>
                <img className="onion1" src={onion1} ale={onion1}/>
                <img className="onion" src={onion} ale={onion}/>
                <img className="popcorn" src={popcorn} ale={popcorn}/>
                <img className="salat1" src={salat1} ale={salat1}/>
                <img className="salat2" src={salat2} ale={salat2}/>
                <div className="reviews">
                    <h4> Our Reviewers</h4>
                </div>
                </div>
                <div className="kitchen">
                <div className="text">
                    <p className="color-red">WHAT THEY SAY</p>
                    <h1>What Our Customers Say About Us</h1>
                    <p>“Fudo is the best. Besides the many and delicious
                         meals, the service is also very good, especially in
                          the very  fast delivey. I highly recommend Fudo
                            to you”.</p>
                            <div className="flex-row">
                            {/* <img src={firstUser} alt={firstUser}/> */}
                            <div className="flex-clm margin-0">
                            <h4>Theresa Jordan</h4>
                            <p className="color-gray">Food Enthusiast</p>
                            </div>
                            </div>
                            </div>
                </div>
                </div>
            </div>
        </div>
    );
};
export default FourthSlide;