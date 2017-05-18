const React = require('react');
const ReactDOM = require('react-dom');

let HelloWorld = React.createClass({
    render() {
        return (<h1>Hello World!</h1>);
    }
});
ReactDOM.render(<HelloWorld/>, document.getElementById('result'));



