import React, { useEffect, useState, useRef } from "react";
import "../styles/besement.css";
import "../../index.css";
import MainContainer from "../system/containers/main";
import dayjs from "dayjs";

import pilot from "../../static/pilot.svg";
import photo from "../../static/photo.png";
import facebook from "../../static/facebook.png";
import twitter from "../../static/twitter.png";
const BesementSlide = ({ stateRef, setStateRef }) => {
    const ref = useRef();
    useEffect(() => {
      setStateRef(ref);
    }, []);
return(
    <div className="slide height-45" ref={ref}>
        <MainContainer>
            <div className="flex-row just-spacebet">
            <div className="flex-colm">
                <div className="flex-row">
                <div class='header_rad-block'>
              <h1 className="color-white">F U D O</h1>
            </div>
            </div>
            <h1>Fudo</h1>
            <p className="besement-Our-job">Our job is to filling your 
            tummy with delicious food and  with fast and free delivery.</p>
            <div className="our-representatives">
            <a href="https://ria.ru/product_Instagram_2/"><img className="cursor-p"  src={photo} alt={photo}/></a>
            <a href="http://www.facebook.com.vn"><img className="cursor-p" src={facebook} alt={facebook}/></a>
            <a href="https://investor.twitterinc.com/home/default.aspx"><img className="cursor-p" src={twitter} alt={twitter}/></a>
            </div>
            </div>
            <div><h4>About</h4>
            <p>About Us</p>
            <p>Features</p>
            <p>News</p>
            <p>Menu</p>
            </div>
            <div><h4>Company</h4>
            <p>Why Fudo?</p>
            <p>Partner With Us</p>
            <p>FAQ</p>
            <p>Blog</p></div>
            <div><h4>Support</h4>
            <p>Account</p>
            <p>Support Center</p>
            <p>Feedback</p>
            <p>Contact Us</p>
            <p>Accessibilty</p></div>
            <div>
                <h4>Get in Touch</h4>
                <p>Question or feedback?</p>
                <p>We’d love to hear from you</p>
                <div className="Email"><p>Email Address</p><img className="cursor-p" src={pilot} alt={pilot}/></div>
            </div>
            </div>
        </MainContainer>
    </div>
);
};
export default BesementSlide;


