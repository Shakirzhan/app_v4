import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import axios from 'axios';
import classes from './Menu.module.css';

export default class Menu extends React.Component {
    state = {
        menu: []
    }
    componentDidMount() {
        axios.get(`/!json/menu/menu.json`)
            .then(res => {
                const menu = res.data;
                this.setState({ menu });
            })
    }

    render() {
        let doubled;
        if ( this.state.menu ) {
            doubled = this.state.menu.map((it) =>
                <NavLink exact key={`${it.id}`} className={`${classes["main-tab__item"]} col-lg-3`} to={`${it.url}`} activeClassName={classes["main-tab__item--active"]}>
                    {`${it.name_url}`}
                </NavLink>
            );
        }

        return (
            <div className={`${classes["main-tab"]} row`}>
                { doubled }
            </div>
        )
    }
}