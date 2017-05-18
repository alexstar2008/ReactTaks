const React = require('react');
const ReactDOM = require('react-dom');

let App = React.createClass({
    propTypes:{
        paramsA: React.PropTypes.number,
        paramsB: React.PropTypes.number
    },
    getDefaultProps() {
        return {
            paramsA: 0,
            paramsB:0
        }
    },
    getInitialState(){
        return {
            mode:true
        }
    },
    changeMode() {
        this.setState({mode:!this.state.mode})
    },
    render() {
        let result = '';
        if (this.state.mode) {
            result = this.props.paramsA + this.props.paramsB;
        } else {
            result = '' + this.props.paramsA + this.props.paramsB;
        }

        return (<div>
            <div className="text-info">Result: {result}</div>
            <button onClick={this.changeMode} className="btn btn-info">Change mode</button>
        </div>);
    }
});

ReactDOM.render(<App paramsA={1} paramsB={2}/>, document.getElementById('container'));