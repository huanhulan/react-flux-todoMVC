import React from 'react';
import Header from './Header';
import Info from './Info';
import TodoStore from './../stores/TodoStore';

var footerTextList = ['回车以增加条目','双击以编辑条目'];

const TodoApp = React.createClass({
    getFooterText(){
        var footerText = footerTextList.map((text,index)=><p key={index}>{text}</p>);
        return footerText;
    },
    render() {
        return (
            <div>
                <section className="todoapp">
                    <Header/>
                </section>
                <Info footerTextList={footerTextList}/>
            </div>
        );
    }
});

export default TodoApp;