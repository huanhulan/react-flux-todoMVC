import React from 'react';
import assign from 'object-assign';
import ActionCreator from './../actions/TodoActionCreators';
import TodoList from './TodoList';

const Main = React.createClass({
    propTypes:{
        filteredTodos:React.PropTypes.array
    },
    handleChange(e){
        if(this.props.allDone){
            return ActionCreator.setAllTodoToUncompleted();
        }
        return ActionCreator.setAllTodoToCompleted();
    },
    render(){
        return (
            <section className='main'>
                <input 
                    type="checkbox"
                    className={this.props.all?'toggle-all':'toggle-all hidden'}
                    checked={this.props.allDone}
                    onChange={this.handleChange}
                />
                <TodoList filteredTodos={this.props.filteredTodos}/>
            </section>
        );
    }
});

export default Main;