import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function WithOnlineRequire(Component) {
  class LoginedCheck extends React.Component {
    componentDidMount() {
      if (!cookies.get("isLogin")) {
        this.props.history.push("/login");
      }
    }
    componentDidUpdate() {
      if (!cookies.get("isLogin")) {
        this.props.history.push("/login");
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }

  return LoginedCheck;
}

export default WithOnlineRequire;