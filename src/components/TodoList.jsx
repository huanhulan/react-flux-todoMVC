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
        var todoItemList = this.props.filteredTodos.map((todo,index)=>{
            return (<TodoItem todo={todo} key={index}/>);
        });
        
        return todoItemList;
    },
    render(){
        return (
            <ul className='todo-list'>
                {this.getTodos()}
            </ul>
        );
    }
});

export default TodoList;