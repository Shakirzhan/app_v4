import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import classes from './Message.module.css';

class User extends React.Component {
    path = `/messages/${this.props.id}`;
    render() {
        return (
            <li className={classes["item-user"]} key={this.props.id}>
                <NavLink to={this.path}>
                      <span className={classes["left-fixer"]}>
                        <span className={classes["left-icon"]}></span>
                        <span className={classes["left-label"]}>{this.props.name}</span>
                      </span>
                </NavLink>
            </li>
        );
    }
}

class MessageItem extends React.Component {
    render() {
        return(
            <div className={classes["message-container"]}>
                <div className={classes["message-photo"]}>
                    <img width="36" src="/img/camera.png" />
                </div>
                <div className={classes["message-content"]}>
                    <div className={classes["message-name"]}>
                        <a href="#">{this.props.name}</a>
                    </div>
                    <div className={classes["message-body"]}>{this.props.body}</div>
                </div>
            </div>
        );
    }
}

export default class Message extends React.Component {
    render() {
        return(
            <div className={classes["posts-container"]}>
                <div className={`${classes["posts-left"]} ${classes["posts-all"]}`}>
                    <ul className={classes["list-user"]}>
                        <User name="Вика" id="1" />
                        <User name="Саша" id="2" />
                    </ul>
                </div>
                <div className={`${classes["posts-right"]} ${classes["posts-all"]}`}>
                    <MessageItem name="Вика" body="Так переменная.класс?" />
                    <MessageItem name="Саша" body="Да так!)" />
                    <MessageItem name="Вика" body="Спасибо!" />
                    <div className={classes["message-input"]}>
                        <input type="text" placeholder="Напишите сообщение…" />
                            <a className={classes["message-submit"]} href="#">Отправить</a>
                    </div>
                </div>
            </div>
        );
    }
}