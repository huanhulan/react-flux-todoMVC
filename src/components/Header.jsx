import React from 'react';
import ActionCreator from './../actions/TodoActionCreators'

var headerText = "待办";
var placeholderText = "填写待办事项";
var autoFocus = true;

const Header = React.createClass({
    getInitialState() {
      return {
        newTodo:"a"
      };  
    },
    handleChange(e) {
        // get value from event target
        // if you directly visit the event obj in react,
        // you will find that the 'target' property is null
        this.setState({newTodo:e.target.value});
    },
    handleKeyUp(e){
        if (e.keyCode === 13) { //13 = enter key
            let todo = {
                id:+new Date(),
                title:this.state.newTodo,
                completed:false
            };
            ActionCreator.addTodoItemToStore(todo);
            this.setState({newTodo:''});
        }
    },
    render(){
        return(
            <header className='header'>
                <h1>{headerText}</h1>
                <input className="new-todo" autoFocus={autoFocus} autoComplete="off" placeholder={placeholderText} value={this.state.newTodo} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            </header>
        );
    }
});

export default Header;