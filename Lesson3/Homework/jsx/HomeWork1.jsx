const React = require('react');
const ReactDOM = require('react-dom');

var Counter = React.createClass({
    getInitialState(){
        return {
            counter: 0
        }
    },
    incrementor(operation) {
        this.setState({ counter: eval(operation + operation + "this.state.counter") });
    },
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1> Current counter: { this.state.counter }</h1>
                        <button onClick={()=>this.incrementor('+')} className="btn btn-primary">+</button>
                        <button onClick={()=>this.incrementor('-')} className="btn btn-danger">-</button>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<Counter/>,document.getElementById('main'));