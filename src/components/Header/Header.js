import React from "react";
import "./header.scss";
// import $ from "jquery";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <nav className="NXc7H jLuN9  ">
        <div className="_lz6s">
          <div className="MWDvN ">
            <div className="oJZym">
              <Link to="/">
                <div className="ybXk5">
                  <span aria-label="Hello puffin" className="logo"></span>
                  <div className="SvO5t"></div>
                  <div className="cq2ai">
                    <span aria-label="Hello puffin" className="text"></span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="ctQZg">
              <div className="_47KiJ">
                <div className="XrOey">
                  <Link to="/users">
                    <span
                      // aria-label="Найти людей"
                      className="glyphsSpriteCompass__outline__24__grey_9 u-__7"
                    ></span>
                  </Link>
                </div>
                <div className="XrOey">
                  <Link to="/">
                    <span
                      // aria-label="Что нового"
                      className="glyphsSpriteHeart__outline__24__grey_9 u-__7"
                    ></span>
                  </Link>
                </div>
                <div className="XrOey">
                  <Link to="/profile">
                    <span
                      // aria-label="Профиль"
                      className="glyphsSpriteUser__outline__24__grey_9 u-__7"
                    ></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
