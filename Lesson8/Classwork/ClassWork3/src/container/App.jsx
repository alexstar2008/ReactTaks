const React = require('react');

let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
const action = require('../actions/clickAction');

let UsersList = require('../components/UsersList.jsx');

class App extends React.Component {
    render() {
        let list = '';
        if (this.props.visible)
            list = <UsersList users={ this.props.users } />
        return(
            <div className="row panel well">
                <div className="col-md-8 col-md-offset-2">
                    <button className="btn btn-primary" onClick={this.props.showUsers}>Show User</button>
                  {list}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        users:state.users,
        visible:state.visible
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        showUsers: action.showUsers
    },dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);
