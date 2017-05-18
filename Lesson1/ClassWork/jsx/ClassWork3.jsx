const React = require('react');
const ReactDOM = require('react-dom');

let HelloWorld = React.createClass({
    getDefaultProps(){
        return {
            valueA: 0,
            valueB:0
        }
    },
    render() {
        return (<h1>Result: {parseInt(this.props.valueA) + parseInt(this.props.valueB)}</h1>);
    }
});

ReactDOM.render(<HelloWorld valueA="15" valueB="3" />,document.getElementById('result'));