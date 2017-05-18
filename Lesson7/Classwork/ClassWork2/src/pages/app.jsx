const React = require('react');
const action = require('../actions/appAction');
const appStore = require('../stores/appStore');

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            timer:null
        }
    }
    componentWillMount() {
        appStore.on('startTimer', () => {
            if (this.state.timer)
                return;
            let timerSet = setInterval(()=>{
                let sec = ++this.state.seconds;
                this.setState({seconds:sec});
            },1000);
            this.setState({ timer: timerSet });
        });
        appStore.on('stopTimer', () => {
            clearInterval(this.state.timer);
            this.setState({ timer: null });     
        });
        appStore.on('resetTimer', () => {
            this.setState({ seconds: 0 });
        });
        this.startHandler();
    }
    startHandler() {
        action.start();
    }
    stopHandler() {
        action.stop();
    }
    resetHandler() {
        action.reset();
    }

    render() {
        return (
            <div className="wrapper">
                <div className="text-center text-center">
                    <h2>Amount of seconds: {this.state.seconds}</h2>
                </div>
                <div className="buttons-group panel well">
                    <button className="btn btn-primary" onClick={this.startHandler}>Start</button>
                    <button className="btn btn-info" onClick={this.stopHandler}>Stop</button>
                    <button className="btn btn-danger" onClick={this.resetHandler}>Reset</button>
                </div>   
            </div>
        );
    }
}
module.exports = App;