import React from 'react';
import ActionCreator from './../actions/TodoActionCreators';
import TodoStore from './../stores/TodoStore';

const Main = React.createClass({
    getAllDone(){
        var isAllDone = 
                    TodoStore.getAllTodos().length
                    === TodoStore.getCompletedTodos().length;

        return {
            allDone:isAllDone
        }
    },
    getInitialState() {
        return this.getAllDone();
    },
    componentDidMount() {
        TodoStore.attachChangeListner(this.onTodoChange);
    },
    componentWillMount() {
        TodoStore.removeChangeListner(this.onTodoChange);
    },
    onTodoChange(){
        return this.setState(this.getAllDone());
    },
    handleClick(e){
        return ActionCreator.setAllTodoToCompleted();
    },
    render(){
        return (
            <section className='main'>
                <input 
                    className={this.state.allDone?'toggle-all hidden':'toggle-all'}
                    type="checkbox"
                    checked={this.state.allDone}
                    onMouseUp={this.handleClick}
                />
            </section>
        );
    }
});

export default Main;