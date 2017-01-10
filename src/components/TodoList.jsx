import React from 'react';
import TodoItem from './TodoItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TodoList = React.createClass({
    getDefaultProps() {
        return {
            filteredTodos: []
        };
    },
    propTypes:{
        filteredTodos: React.PropTypes.array
    },
    getTodos(){
        /* the key have special effects on diffing virtual dom,
         * make sure that every change can be properly tracked.
         * If you put the key of every child component by it's index,
         * it won't change while the length of the children changing and that
         * will make the component behave weirdly when change the length of the
         * children.
         */
        
        var todoItemList = this.props.filteredTodos.map((todo,index)=>{
            return (<TodoItem todo={todo} key={todo.id}/>);
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