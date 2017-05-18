const React = require('react');

class List extends React.Component {
    constructor(props) {
        super(props);
        this.removeItemPrepare = this.removeItemPrepare.bind(this);
    }
    removeItemPrepare(event) {
        let id = event.target.parentElement.dataset.id;
        this.props.removeItem(id);
    } 
    render() {
        let todosList = this.props.todos.map((item) => {
            return <li key={item.id} data-id={item.id} className="list-group-item">{item.content}<span onClick={this.removeItemPrepare} className="text-warning custom-remover">X</span></li>;
        });
        return(
            <ul className="list-group">{todosList}</ul>
        );
    }
}
module.exports = List;