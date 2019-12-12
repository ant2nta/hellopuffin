import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Content from "../src/components/Content";
import ErrorPage from "../src/components/ErrorPage";
import Registration from "../src/components/Registration";
import FindUsers from "../src/components/FindUsers";
import Profile from "../src/components/Profile";
import Info from "../src/components/Info";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div id="body">
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/login" component={Registration} />
            <Route exact path="/users" component={FindUsers} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/profile/edit" component={Info} />
            <Route path="/login" component={Registration} exact />
            <Route exact component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
