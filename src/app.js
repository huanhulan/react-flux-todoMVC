import React from 'react';
import ReactDOM from 'react-dom';
import TodoRouter from './router/Router'
import {
    createHistory
} from 'history'
import {
    browserHistory,
    Router
} from 'react-router';
import FastClick from 'fastclick';

window.addEventListener('load', () => {
    FastClick.attach(document.body);
});
// call the createHistory to turn off the query key
// to turn on:
// ReactDOM.render((<Router history={browserHistory} routes={TodoRouter} />), document.getElementById('app'));
ReactDOM.render((<Router history={createHistory()} routes={TodoRouter} />), document.getElementById('app'));