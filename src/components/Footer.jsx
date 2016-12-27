import React from 'react';
import ActionCreator from './../actions/TodoActionCreators';
import TodoStore from './../stores/TodoStore';

const Footer = React.createClass({
    getRemainCount(){
        return {
            all:TodoStore.getAllTodos().length,
            remainings:TodoStore.getActiveTodos().length
        }
    },
    getInitialState() {
        return this.getRemainCount();
    },
    componentDidMount() {
        TodoStore.attachChangeListner(this.onTodoChange);
    },
    componentWillMount() {
        TodoStore.removeChangeListner(this.onTodoChange);
    },
    showClearBtn(){
        return this.state.all > this.state.remainings;
    },
    onTodoChange(){
        return this.setState(this.getRemainCount());
    },
    handleClick(e){
        return ActionCreator.removeAllCompletedTodoInStore();
    },
    render(){
        return (
            <footer className={this.state.all?'footer':'footer hidden'}>
                <span className="todo-count">
                    剩余<strong>{this.state.remainings}</strong>条
                </span>
                <ul className="filters">
                    <li><a href="#/all">全部记录</a></li>
                    <li><a href="#/active">未完成</a></li>
                    <li><a href="#/completed">已完成</a></li>
                </ul>
                <button className={this.showClearBtn()?'clear-completed':'hidden clear-completed'} onMouseUp={this.handleClick}>
                    清除已完成记录
                </button>
            </footer>
        );
    }
});

export default Footer;