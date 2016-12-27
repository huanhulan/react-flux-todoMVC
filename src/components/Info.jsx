import React from 'react';

const Info = React.createClass({
    getDefaultProps(){
        return {
            footerTextList:['双击以编辑条目']
        };
    },
    propTypes:{
        footerTextList:React.PropTypes.array
    },
    getFooterText(){
        var footerText = this.props.footerTextList.map((text,index)=><p key={index}>{text}</p>);
        return footerText;
    },
    render() {
        return (
            <footer className="info">
                {this.getFooterText()}
            </footer>
        );
    }
});

export default Info;