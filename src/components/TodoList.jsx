import React from 'react';
import TodoItem from './TodoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
                    <ReactCSSTransitionGroup 
                        transitionName = "todo" 
                        transitionAppear = {true}
                        transitionAppearTimeout = {0}
                        transitionEnterTimeout = {0} 
                        transitionLeaveTimeout = {0}
                    >
                        {this.getTodos()}
                    </ReactCSSTransitionGroup>
                </ul>
        );
    }
});

export default TodoList;