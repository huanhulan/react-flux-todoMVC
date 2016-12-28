import React from 'react';
import ActionCreator from './../actions/TodoActionCreators';
import RouterConstant from './../constants/RouterConstant';
import {
  Link
} from 'react-router';

const Footer = React.createClass({
    showClearBtn(){
        return this.props.all > this.props.remainings;
    },
    onTodoChange(){
        return this.setState(this.getRemainCount());
    },
    handleClick(e){
        return ActionCreator.removeAllCompletedTodoInStore();
    },
    render(){
        return (
            <footer className={this.props.all?'footer':'footer hidden'}>
                <span className="todo-count">
                    剩余<strong>{this.props.remainings}</strong>条
                </span>
                <ul className="filters">
                    <li><Link to={RouterConstant.ALL}>全部记录</Link></li>
                    <li><Link to={RouterConstant.ACTIVE}>未完成</Link></li>
                    <li><Link to={RouterConstant.COMPLETED}>已完成</Link></li>
                </ul>
                <button className={this.showClearBtn()?'clear-completed':'hidden clear-completed'} onMouseUp={this.handleClick}>
                    清除已完成记录
                </button>
            </footer>
        );
    }
});

export default Footer;