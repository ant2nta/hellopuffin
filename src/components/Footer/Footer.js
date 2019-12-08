import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer id="myFooter">
      <div className="container">
        <ul>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Поддержка</a>
          </li>
          <li>
            <a href="#">Конфиденциальность</a>
          </li>
          <li>
            <a href="#">Условия</a>
          </li>
          <li>
            <a href="#">Язык</a>
          </li>
          <li>
            <p>© 2019 Puffin corporation</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
