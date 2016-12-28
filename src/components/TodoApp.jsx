import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import Info from './Info';
import TodoStore from './../stores/TodoStore';
import RouterConstant from './../constants/RouterConstant';

var footerTextList = ['回车以增加条目','双击以编辑条目'];

const TodoApp = React.createClass({
    getInitialState() {
        return {
            filteredTodos:this.getFilteredTodos(this.props.location.pathname),
            all:TodoStore.getAllTodos().length,
            remainings:TodoStore.getActiveTodos().length,
            allDone:TodoStore.getAllTodos().length
                    === TodoStore.getCompletedTodos().length
        };
    },
    componentDidMount() {
        TodoStore.attachChangeListner(this.onTodoChange);
    },
    componentWillReceiveProps(nextProps) {
        if(this.props.location.pathname!==nextProps.location.pathname){
            var todos = this.getFilteredTodos(nextProps.location.pathname);
            return this.setState({filteredTodos:todos});
        }else{
            return false;
        }
    },
    componentWillMount() {
        TodoStore.removeChangeListner(this.onTodoChange);
    },
    getFooterText(){
        var footerText = footerTextList.map((text,index)=><p key={index}>{text}</p>);
        return footerText;
    },
    onTodoChange(){
        var todos = this.getFilteredTodos(this.props.location.pathname);
        return this.setState({
            filteredTodos:todos,
            all:TodoStore.getAllTodos().length,
            remainings:TodoStore.getActiveTodos().length,
            allDone:TodoStore.getAllTodos().length
                    === TodoStore.getCompletedTodos().length
        });
    },
    getFilteredTodos(pathname){
        var todos = [];
        switch(pathname){
            case RouterConstant.ACTIVE:
                todos = TodoStore.getActiveTodos();
                break;
            case RouterConstant.COMPLETED:
                todos = TodoStore.getCompletedTodos();
                break;
            case RouterConstant.ALL:
            case '/':
                todos = TodoStore.getAllTodos();
                break;
        }
        return todos;
    },
    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header/>
                    <Main filteredTodos={this.state.filteredTodos} allDone={this.state.allDone} all={this.state.all}/>
                    <Footer all={this.state.all} remainings={this.state.remainings}/>
                </section>
                <Info footerTextList={footerTextList}/>
            </div>
        );
    }
});

export default TodoApp;