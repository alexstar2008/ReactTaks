const React = require('react');

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let todos = this.props.todos.map((item) => {
            return <tr><td key={item.id} data-id={item.id}>{item.content}
                       </td>
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