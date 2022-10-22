import React, { useEffect, useState } from "react";
import "../styles/header.css";
import search from "../../static/search.svg";
import busket from "../../static/busket.svg";
import MainContainer from "../system/containers/main";

const Header = ({ activeSpan, setActiveSpan, heigths }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <div className='wrapper fl-center header-position'>
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
