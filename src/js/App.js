import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header"
import Content from "./components/Content"

import "../css/bootstrap.css";
import "../css/settings.css"

export default class Application extends React.Component {

  render() {
  	
    // новый мастер
    return(
      <Router>
        <Header />
        <Content stateContent={this.props.state}
                 dispatch={ this.props.dispatch } />
      </Router>
    )
  }
}