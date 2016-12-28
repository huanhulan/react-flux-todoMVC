import React from 'react';
import assign from 'object-assign';
import ActionCreator from './../actions/TodoActionCreators';
import TodoList from './TodoList';

const Main = React.createClass({
    propTypes:{
        filteredTodos:React.PropTypes.array
    },
    handleClick(e){
        return ActionCreator.setAllTodoToCompleted();
    },
    render(){
        return (
            <section className='main'>
                <input 
                    type="checkbox"
                    className={this.props.allDone?'toggle-all hidden':'toggle-all'}
                    checked={this.props.allDone}
                    onClick={this.handleClick}
                />
                <TodoList filteredTodos={this.props.filteredTodos}/>
            </section>
        );
    }
});

export default Main;