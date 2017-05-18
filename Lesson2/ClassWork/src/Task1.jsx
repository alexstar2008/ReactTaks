const React = require('react');
const ReactDOM = require('react-dom');

let Parent = React.createClass({
    render(){
        return (
            <div>
                <h1>Any Parent text </h1>
                 <Child />
            </div>
        );
    }
});
let Child = React.createClass({
    render() {
        return (<h3> Any Child text </h3>);

    }
});
ReactDOM.render(<Parent/>, document.getElementById('main'));