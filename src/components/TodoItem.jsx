import React from 'react';
import classnames from 'classnames';
import ActionCreator from './../actions/TodoActionCreators'

const TodoItem = React.createClass({
    getInitialState() {
        return {
            editing:false,
            editingTodo:this.props.todo // create a copy of origin todo when edit one
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
    handleChange(){
        // TODO:handle change evt
    },
    doneEdit(){
        // TODO:create updateTodo action
    },
    toggleComplete(){
        return ActionCreator.toggleStateForTodo(this.props.todo);
    },
    removeTodo(){
        return ActionCreator.removeTodoFromStore(this.props.todo);
    },
    render() {
        var classes = classnames({
            completed: this.props.todo.completed,
            editing: this.state.isEditing,
            todo:'todo'
        });
        return (
            <li className={classes}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.toggleComplete} checked={this.props.todo.completed}/>
                    <label onDoubleClick={this.editTodo}>{this.props.todo.title}</label>
                    <button className="destroy" onClick={this.removeTodo}></button>
                </div>
                <input className="edit" type="text" value={this.state.editingTodo.title} 
                 autoFocus={this.state.isEditing} onBlur={this.doneEdit}
                 onKeyUp={this.handelKeyUp} onChange={this.handleChange}/>
            </li>
        );
    }
});

export default TodoItem;