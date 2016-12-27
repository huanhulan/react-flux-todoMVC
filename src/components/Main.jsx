import React from 'react';
import ActionCreator from './../actions/TodoActionCreators';
import TodoStore from './../stores/TodoStore';

const Main = React.createClass({
    getInitialState() {
        var isAllDone = 
                    TodoStore.getAllTodos().length
                    === TodoStore.getCompletedTodos().length;

        return {
            allDone:isAllDone
        }
    },
    componentDidMount() {
        TodoStore.attachChangeListner(this.onTodoChange);
    },
    componentWillMount() {
        TodoStore.removeChangeListner(this.onTodoChange);
    },
    onTodoChange(){
        var isAllDone = 
                    TodoStore.getAllTodos().length
                    === TodoStore.getCompletedTodos().length;

        return this.setState({
            allDone:isAllDone
        });
    },
    handleClick(e){
        console.log(e);
        return ActionCreator.setAllTodoToCompleted();
    },
    render(){
        return (
            <section className='main'>
                <input className={this.state.allDone?'toggle-all hidden':'toggle-all'} type="checkbox" checked={this.state.allDone} onClick={this.handleClick}/>
            </section>
        );
    }
});

export default Main;