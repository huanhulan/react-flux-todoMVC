import React from 'react';
import ReactDOM from 'react-dom';
import TodoRouter from './router/Router'
import {
    browserHistory,
    Router
} from 'react-router';

ReactDOM.render((<Router history={browserHistory} routes={TodoRouter} />), document.getElementById('app'));