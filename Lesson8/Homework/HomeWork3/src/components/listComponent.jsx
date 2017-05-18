const React = require('react');

class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let todosList = this.props.todos.map((item) => {
            return <li key={item.id} data-id={item.id} className="list-group-item">{item.content}</li>;
        });
        return(
            <ul className="list-group">{todosList}</ul>
        );
    }
}
module.exports = List;