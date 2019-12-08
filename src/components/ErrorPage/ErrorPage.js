import React from "react";
import image from "../../assets/Images/error2.gif";
import "./errorPage.scss";

const ErrorPage = () => {
  return (
    <div id="errorPage">
      <img src={image} />
      <br />
      <p id="errorLabel">404 Page not found :(</p>
    </div>
  );
};

export default ErrorPage;
