import React from 'react';
import classnames from 'classnames';
import ActionCreator from './../actions/TodoActionCreators'

const TodoItem = React.createClass({
    getInitialState() {
        return {
            isComplete:!!this.props.todo.completed,
            editing:false,
            beforeEditCache:null // cache item when editing
        };
    },
    propTypes:{
        todo:React.PropTypes.object
    },
    editTodo(){
        // TODO:change state
    },
    handelKeyUp(){
        // TODO:handle enter & esc
    },
    removeTodo(){
        // TODO:create removeTodo action
    },
    doneEdit(){
        // TODO:create updateTodo action
    },
    render() {
        const classes = classnames({
            completed: this.state.isComplete,
            editing: this.state.isEditing,
            todo:'todo'
        });
        return (
            <li className={classes}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.toggleComplete} />
                    <label onDoubleClick={this.editTodo}>{this.props.todo.title}</label>
                    <button class="destroy" onClick={this.removeTodo}></button>
                </div>
                <input className="edit" type="text" value={this.props.todo.title} 
                 autoFocus={this.state.isEditing} onBlur="doneEdit(todo)"
                 onKeyUp={this.handelKeyUp} />
            </li>
        );
    }
});

export default TodoItem;