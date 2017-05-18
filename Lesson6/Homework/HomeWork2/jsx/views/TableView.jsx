const React = require('react');

class TableView extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.route.users);
    }
    render() {
        let list = this.props.route.users.map((item) => {
            return <tr key={item.first_name }>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.gender}</td>
            </tr>
        });
        let headers = [<th>FirstName</th>,<th>LastName</th>,<th>Gender</th>];
        return (
            <table className="table">
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );  
        }
}

module.exports = TableView;