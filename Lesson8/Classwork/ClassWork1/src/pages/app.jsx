const React = require('react');

let bindActionCreators = require('redux').bindActionCreators;
let connect = require('react-redux').connect;
const actions = require('../actions/index');

class App extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel well">
                        <div className="form-group">
                            <label for="text">Enter text:&nbsp;</label>
                            <input type="text" onChange={this.props.textChange} id="text" />
                        </div>

                        <h1  className="text-info">{this.props.text}</h1>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        text:state
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        textChange:actions.textChange
    }, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);

