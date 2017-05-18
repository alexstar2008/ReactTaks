const React = require('react');

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.removeItemPrepare = this.removeItemPrepare.bind(this);
    }
    removeItemPrepare(event) {
        let id = event.target.parentElement.dataset.id;
        this.props.removeItem(id);
    }
    render() {
        let todos = this.props.todos.map((item) => {
            return <tr><td key={item.id} data-id={item.id}>{item.content}
                        <span onClick={this.removeItemPrepare} className="text-warning custom-remover">X</span></td>
                  </tr>;
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                    {todos}
                </tbody>
            </table>
        );
    }
}
module.exports = Table;