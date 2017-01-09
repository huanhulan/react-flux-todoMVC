import React from 'react';
import ActionCreator from './../actions/TodoActionCreators'

const HEADER_TEXT = "待办";
const PLACEHOLDER_TEXT = "填写待办事项";
var autoFocus = true;

const Header = React.createClass({
    getInitialState() {
      return {
        newTodo:""
      };  
    },
    handleChange(e) {
        // get value from event target
        // if you directly visit the event obj in react,
        // you will find that the 'target' property is null
        this.setState({newTodo:e.target.value});
    },
    handleKeyUp(e){
        if(!this.state.newTodo){
            return;
        }
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
                <h1>{HEADER_TEXT}</h1>
                <input className="new-todo" autoFocus={autoFocus} autoComplete="off" placeholder={PLACEHOLDER_TEXT} value={this.state.newTodo} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
            </header>
        );
    }
});

export default Header;