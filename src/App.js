import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import Header from './header/Header';
import ContactForm from './contact/ContactForm';
import {Flex, WhiteSpace, WingBlank} from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="flex-container">
          <ContactForm/>
        </div>
      </div>
    );
  }
}

export default App;
