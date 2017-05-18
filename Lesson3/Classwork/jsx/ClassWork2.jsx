const React = require('react');
const ReactDOM = require('react-dom');

var TimerOpened = React.createClass({
   
    getInitialState() {
        return {
            timeMs:0,
            timer: setInterval(()=>{
                this.setState({ timeMs: this.state.timeMs + 1 });
            }, 1000)
        }
    },
    render() {
        return(
            <div>
                <span>Counter: {this.state.timeMs}</span>
            </div>
        );
    }

});


ReactDOM.render(<TimerOpened/>,document.getElementById('main'));