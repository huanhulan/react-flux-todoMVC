import {
    createHistory,
    useBasename
} from 'history';
import {
    Router,
    Route,
    Redirect,
    hashHistory
} from 'react-router';
import TodoApp from './../components/TodoApp';
import React from 'react';

const TodoRouter = <Router history={hashHistory}>
        <Route path="all" component={TodoApp}/>
        <Route path="active" component={TodoApp}/>
        <Route path="completed" component={TodoApp}/>
        <Redirect from="/" to="all" />
  </Router>

export default TodoRouter