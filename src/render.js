/** delete
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App';
import {addComment, updateComment} from './data/state';

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state}
             addComment={ addComment }
             updateComment={ updateComment } />,
        document.getElementById('root')
    );
}

delete