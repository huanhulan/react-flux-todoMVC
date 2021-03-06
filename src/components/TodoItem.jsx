import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import ActionCreator from './../actions/TodoActionCreators';
import Hammer from 'hammerjs';
import assign from 'object-assign';

const TodoItem = React.createClass({
    getInitialState() {
        return {
            isEditing: false,
            isTyping: false,
            editingTodo: this.props.todo // create a copy of origin todo when edit one
        };
    },
    propTypes: {
        todo: React.PropTypes.object
    },
    componentDidMount() {
        let elLabel = ReactDOM.findDOMNode(this).querySelectorAll('.todo-item__label')[0];
        this.hammer = Hammer(elLabel);
        this.hammer.on('press',this.editTodo);
        this.hammer.on('swiperight',this.removeTodo);
    },
    componentDidUpdate() {
        if (this.state.isEditing && !this.state.isTyping) {
            var input = this.textInput;

            input.focus();

            if (input.select) {
                input.setSelectionRange(0, input.value.length);
            }
        }
    },
    componentWillUnmount() {
        this.hammer.off('press',this.editTodo); 
        this.hammer.off('swiperight',this.removeTodo); 
    },
    editTodo(e) {
        this.textInput.focus();
        return this.setState({
            isEditing: true
        });
    },
    handleKeyDown(e) {
        return this.setState({
            isTyping: true
        });
    },
    handelKeyUp(e) {
        // TODO:handle enter & esc
        if (e.keyCode === 13) {
            return this.doneEdit();
        } else if (e.keyCode === 27) {
            return this.setState({
                editingTodo: this.props.todo,
                isEditing: false,
                isTyping: false
            });
        }
    },
    handleChange(e) {
        var newTodo = assign(this.props.todo,{
            title: e.target.value,
        });
        var s = window.getSelection();
        
        if (s.rangeCount > 1) {
            for (var i = 1; i < s.rangeCount; i++) {
                s.removeRange(s.getRangeAt(i));
            }
        }
        return this.setState({
            editingTodo: newTodo
        });
    },
    doneEdit() {
        this.setState({
            isEditing: false,
            isTyping: false
        });

        return ActionCreator.updateTodoInStore(this.props.todo,
            this.state.editingTodo);
    },
    toggleComplete() {
        return ActionCreator.toggleStateForTodo(this.props.todo);
    },
    removeTodo() {
        return ActionCreator.removeTodoFromStore(this.props.todo);
    },
    render() {
        var classes = classnames({
            completed: this.props.todo.completed,
            editing: this.state.isEditing,
            todo: 'todo'
        });

        return (
            <li className={classes}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={this.toggleComplete} checked={this.props.todo.completed}/>
                    <label 
                        onDoubleClick={this.editTodo}
                        className="todo-item__label"
                    >
                        {this.props.todo.title}
                    </label>
                    <button className="destroy" onClick={this.removeTodo}></button>
                </div>
                <input 
                    className="edit" 
                    type="text" 
                    value={this.state.editingTodo.title} 
                    autoFocus={this.state.isEditing} 
                    onBlur={this.doneEdit}
                    onKeyUp={this.handelKeyUp} 
                    onChange={this.handleChange} 
                    ref={(input) => { this.textInput = input; }} 
                    onKeyDown={this.handleKeyDown}
                />
            </li>
        );
    }
});

export default TodoItem;