//Создайте React компонент, который отображает на странице произвольный текст. Компонент должен иметь такие свойства: color и fontSize.
//Установите на основе этих свойств стили для компонента.
const React = require('react');
const ReactDOM = require('react-dom');

let TextStyle = React.createClass({
    getDefaultProps() {
        return {
            color: 'grey',
            fontSize:'16'
        }
    },
    render() {
        const pStyle = {
            color: this.props.color,
            fontSize: this.props.fontSize +'px'
        }
        return (<p style={pStyle}>The story of my life</p>);
    }
})

ReactDOM.render(<TextStyle color="green" fontSize="25"/>,document.getElementById('result'));