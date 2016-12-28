import React from 'react';
import TodoItem from './TodoItem';

const TodoList = React.createClass({
    getDefaultProps() {
        return {
            filteredTodos:[]
        };
    },
    propTypes:{
        filteredTodos:React.PropTypes.array
    },
    getTodos(){
        return this.props.filteredTodos.map(todo=>{
            return (<TodoItem todo={todo}/>);
        });
    },
    render(){
        (<ul className='todo-list'>
            {getTodos()}
        </ul>)
    }
});

export default TodoList;