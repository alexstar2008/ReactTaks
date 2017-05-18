const React = require('react');
const ReactDOM = require('react-dom');

var TimerOpened = React.createClass({
   
    getInitialState() {
        return {
            timeMs:0,
            timer: this.initTimer()
        }
    },
    reset() {
        this.state.timeMs = 0;
    },
    initTimer(){
        var timer = setInterval(() => {
            this.setState({ timeMs: this.state.timeMs + 1 });
        }, 1000);
        return timer;
    },
    start() {
        if (this.state.timer)
            return;
        this.setState({ timer: this.initTimer() });
    },
    stop() {
        clearInterval(this.state.timer);
        this.state.timer = null;
    },
    render() {
        return(
            <div>
                <span>Counter: {this.state.timeMs}</span>
                <button onClick={this.reset} className="btn btn-danger">Reset</button>
                <button onClick={this.start} className="btn btn-primary">Start</button>
                <button onClick={this.stop} className="btn btn-info">Stop</button>
            </div>
        );
}

});


ReactDOM.render(<TimerOpened/>,document.getElementById('main'));