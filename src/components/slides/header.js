import React, { useEffect, useState } from "react";
import "../styles/header.css";
import search from "../../static/search.svg";
import busket from "../../static/busket.svg";
import MainContainer from "../system/containers/main";

import photo from "../../static/photo.png";
import facebook from "../../static/facebook.png";
import twitter from "../../static/twitter.png";
const Header = ({ activeSpan, setActiveSpan, heigths }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
const [loop, setLoop] = useState()
const [ActiveLoop, setActiveLoop] = useState()
  useEffect(() => {
    if (heigths.length > 0) {
      if (offset >= (heigths[0] + heigths[1] + heigths[2]) / 1.1) {
        setActiveSpan(4);
      } else if (offset >= (heigths[0] + heigths[1]) / 1.17) {
        setActiveSpan(3);
      } else if (offset >= heigths[0] / 1.2) {
        setActiveSpan(2);
      } else {
        setActiveSpan(1);
      }
    }
  }, [offset]);

  useEffect(() => {
    if (heigths.length > 0) {
      const search = window.location.search;
      if (search.length > 0) {
        let params = new URLSearchParams(search);
        setActiveSpan(Number(params.get("pos")));
        switch (Number(params.get("pos"))) {
          case 1:
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            break;
          case 2:
            window.scrollTo({
              top: heigths[0],
              behavior: "smooth",
            });
            break;
          case 3:
            window.scrollTo({
              top: heigths[0] + heigths[1],
              behavior: "smooth",
            });
            break;
          case 4:
            window.scrollTo({
              top: heigths[0] + heigths[1] + heigths[2],
              behavior: "smooth",
            });
            break;

          default:
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
        }
      }
    }
  }, [heigths]);

  function setActiveState(num) {
    setActiveSpan(num);
    switch (num) {
      case 1:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        break;
      case 2:
        window.scrollTo({
          top: heigths[0],
          behavior: "smooth",
        });
        break;
      case 3:
        window.scrollTo({
          top: heigths[0] + heigths[1],
          behavior: "smooth",
        });
        break;
      case 4:
        window.scrollTo({
          top: heigths[0] + heigths[1] + heigths[2],
          behavior: "smooth",
        });
        break;

      default:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    }
  }
  const [popup, setPopup] = useState(false);
const [popupActiveImg, setPopupActiveImg] = useState(null)
  return (
    <div className='wrapper fl-center header-position'>
       {popup && <div className='popup' onClick={()=> {setPopup(false);}}>
        <div className="popup-window">
          <div className="popup-header flex-row alin-cent just-aroun">
            <h2>Вход</h2><h3  className="color-red">Регистрация</h3>
            <div className="gray-line"></div>
            </div>
          <div className="flex-clm  just-c alin-cent ">
            <input className="register-input" placeholder="введите Email"/>
            <input className="register-input" placeholder="введите пароль"/>
            <input className="register-input" placeholder="повторите пароль"/>
            <button className="login register-button">Регистрация</button>
            <h3>Авторизация через социальные сети</h3>
            <div className="our-representatives">
            <a href="https://ria.ru/product_Instagram_2/"><img className="cursor-p"  src={photo} alt={photo}/></a>
            <a href="http://www.facebook.com.vn"><img className="cursor-p" src={facebook} alt={facebook}/></a>
            <a href="https://investor.twitterinc.com/home/default.aspx"><img className="cursor-p" src={twitter} alt={twitter}/></a>
            </div>
          </div>
          </div>
          </div>}
      <MainContainer>
        <div className='header'>
          <div className='over_header__rad-block'>
            <div class='header_rad-block'>
              <h1 className="color-white">F U D O</h1>
            </div>
            <h1>Fudo</h1>
          </div>
          <div className='header_menu'>
            <p
              onClick={() => setActiveState(1)}
              className={
                activeSpan === 1 ? "cursor-p  header_span_active" : "cursor-p"
              }
            >
              Services
            </p>
            <p
              onClick={() => setActiveState(2)}
              className={
                activeSpan === 2 ? "cursor-p  header_span_active" : "cursor-p"
              }
            >
              Why Fudo?
            </p>
            <p
              onClick={() => setActiveState(3)}
              className={
                activeSpan === 3 ? "cursor-p  header_span_active" : "cursor-p"
              }
            >
              Menu
            </p>
            <p
              onClick={() => setActiveState(4)}
              className={
                activeSpan === 4 ? "cursor-p  header_span_active" : "cursor-p"
              }
            >
              Contact
            </p>
          </div>
          <div className='header_opportunities'>
            <img onClick={()=> setActiveLoop()}
            className={
              ActiveLoop === true ? <input className="loop-input" placeholder="Поиск"/>: "cursor-p"
            }
             src={search} alt={search} />
            <img
              className='cursor-p'
              src={busket}
              style={{ marginLeft: 30 }}
              alt={busket}
            />
            <div className='login cursor-p' onClick={() => {setPopup(true);setPopupActiveImg( )}}>
              <p>login</p>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;
