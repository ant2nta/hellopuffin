import React from "react";
import "./App.scss";
import Cookies from "universal-cookie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Content from "../src/components/Content";
import ErrorPage from "../src/components/ErrorPage";
import Registration from "../src/components/Registration";
import FindUsers from "../src/components/FindUsers";
import Profile from "../src/components/Profile";

const cookies = new Cookies();

class App extends React.Component {
  state = {
    isLogin: false
  };

  loginHandler = () => {
    if (this.state.isLogin) {
      cookies.remove("isLogin");
    }
    this.setState(state => ({
      isLogin: !state.isLogin
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/helloPuffin" component={Content} />
          <Route exact path="/hellopuffin/login" component={Registration} />
          <Route exact path="/hellopuffin/users" component={FindUsers} />
          <Route exact path="/helloPuffin/profile" component={Profile} />
          <Route
            path="/login"
            component={props => (
              <Registration {...props} loginHandler={this.loginHandler} />
            )}
            exact
          />
          <Route exact component={ErrorPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
