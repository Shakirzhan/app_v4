import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header"

import "../css/bootstrap.css";
import "../css/settings.css"

export default class Application extends React.Component {

  render() {
    // новый мастер
    return(
      <Router>
        <Header />
      </Router>
    )
  }
}