const React = require('react');

let ToDo = require('./toDo.jsx');

class App extends React.Component {
    render() {
        return (
            <div>
                <ToDo/>
            </div>
        );
    }
}
module.exports = App;