import React from "react";
import "../styles/header.css";
import search from "../../static/search.svg";
import busket from "../../static/busket.svg";
import MainContainer from "../system/containers/main";

const Header = ({ activeSpan, setActiveSpan, heigths }) => {
  function setActiveState(num) {
    setActiveSpan(num);
  }

  console.log("heigths", heigths);

  return (
    <div className='wrapper fl-center header-position'>
      <MainContainer>
        <div className='header'>
          <div className='over_header__rad-block'>
            <div class='header_rad-block'>
              <h1>F U D O</h1>
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
            <img className='cursor-p' src={search} alt={search} />
            <img
              className='cursor-p'
              src={busket}
              style={{ marginLeft: 30 }}
              alt={busket}
            />
            <div className='login cursor-p'>
              <p>login</p>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default Header;
