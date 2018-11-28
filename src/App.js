import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Header from './header/Header';
import ContactForm from './contact/ContactForm';
import {Flex, WhiteSpace, WingBlank} from 'antd-mobile';
import { Route, Link, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="flex-container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/contact/:step" component={ContactForm}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
