const React = require('react');

const calcAction = require('../actions/calcAction');
const calcStore = require('../stores/calcStore');

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            result: calcStore.getResult()
        }
    }
    componentWillMount() {
        calcStore.on('update', () => {
            this.setState({ result: calcStore.getResult() });
        });
    }
    clickHandler(event) {
        const params = [document.getElementById('firstParam').value,
            document.getElementById('secondParam').value];
        switch (event.target.innerText) {
            case '+': calcAction.sum(params); break;
            case '-': calcAction.subl(params); break;
            case '*': calcAction.mul(params); break;
            case '/': calcAction.div(params); break;
            default: break;
        }
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Calculator</h1>
                <div>
                    <h2>Result: {this.state.result}</h2>
                </div>
                <div className="panel well">
                    <div className="form-group">
                        <label htmlFor="firstParam">First value:&nbsp;</label>
                        <input type="text" id="firstParam" />
                    </div>
                     <div className="form-group">
                        <label htmlFor="secondParam">Second value:&nbsp;</label>
                        <input type="text" id="secondParam" />
                     </div>
                    <div className="form-group" onClick={this.clickHandler}>
                        <button className="btn btn-default">+</button>
                        <button className="btn btn-default">-</button>
                        <button className="btn btn-default">*</button>
                        <button className="btn btn-default">/</button>
                    </div>
                </div>
            </div>
        )
    }
}
module.exports = App;
