import React from 'react';
import ReactDOM from 'react-dom';
import store from './data/state';
import './css/index.css';
import App from './js/App';

let renderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={ store.dispatch.bind(store) } />,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);