import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Menu from "./Menu"
import classes from './Content.module.css';

import Message from "./Message"

export default class Content extends React.Component {
    render() {
        return(
            <div className="main">
                <div className="container">
                    <div className={classes["main--white"]}>
                        <Route component={Menu} />

                        <Route path="/messages" component={Message} />
                    </div>
                </div>
            </div>
        );
    }
}