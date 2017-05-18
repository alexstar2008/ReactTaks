const React = require('react');
const ReactDOM = require('react-dom');

var ToggleClasses = React.createClass({
    getInitialState(){
        return{
            backStyle:'black'
        }
    },
    toggle() {
        if (this.state.backStyle == 'black')
            this.setState({ backStyle: 'red' });
        else
            this.setState({ backStyle: 'black' });
    },
    render() {
        return (
            <div className="panel well">
            <div className={this.state.backStyle}></div>
            <button onClick={this.toggle} className="btn btn-info">Toggle Classes</button>
            </div>
        );
    }
});
ReactDOM.render(<ToggleClasses />,document.getElementById('main'));