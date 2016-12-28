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
        return this.props.filteredTodos.map((todo,index)=>{
            return (<TodoItem todo={todo} key={index}/>);
        });
    },
    render(){
        (<ul className='todo-list'>
            {getTodos()}
        </ul>)
    }
});

export default TodoList;