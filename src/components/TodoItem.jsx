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
    handleChange(){
        // TODO:handle change evt
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
                    <button className="destroy" onClick={this.removeTodo}></button>
                </div>
                <input className="edit" type="text" value={this.props.todo.title} 
                 autoFocus={this.state.isEditing} onBlur={this.doneEdit}
                 onKeyUp={this.handelKeyUp} onChange={this.handleChange}/>
            </li>
        );
    }
});

export default TodoItem;