import React, { Fragment } from 'react';
import './App.css';
import logo from '../assets/logo.jpg';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
      <Header />
      <Login />
      <Footer />
      </div>
      </Fragment>
  );
}

export default App;
