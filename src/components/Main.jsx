import React from 'react';
import assign from 'object-assign';
import ActionCreator from './../actions/TodoActionCreators';
import {
  createHistory,
  useBasename
} from 'history'
import {
  Router,
  Route,
  IndexRoute,
  Link
} from 'react-router'

const Main = React.createClass({
    handleClick(e){
        return ActionCreator.setAllTodoToCompleted();
    },
    render(){
        return (
            <section className='main'>
                <input 
                    className={this.props.allDone?'toggle-all hidden':'toggle-all'}
                    type="checkbox"
                    checked={this.props.allDone}
                    onMouseUp={this.handleClick}
                />
            </section>
        );
    }
});

export default Main;