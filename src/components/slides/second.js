import React from "react";
import "../styles/second.css";
// import "../index.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

const SecondSlide = () => {
    return (
        <div className="slide heigh-70">
            <div className="flex-clm text-center">
            <p className="color-red">What we serve</p>
            <h1>Your Favorite Food Delivery Partner</h1>
            </div>
            <div className="flex-row ">
                <div className="flex-clm">
                <img src=""/>
                <h1></h1>
                <p></p>
                </div>
                <div className="flex-clm">
                <img src=""/>
                <h1></h1>
                <p></p>
                </div>
                <div className="flex-clm">
                <img src=""/>
                <h1></h1>
                <p></p>
                </div>
            </div>
        </div>
    );
};

export default SecondSlide;