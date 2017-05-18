const React = require('react');
const router = require('react-router');
let Link = router.Link;

class TableView extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.route.users);
    }
    render() {
        let list = this.props.route.users.map((item) => {
            return <tr key={item.first_name }>
                        <td><Link to={{ pathname: `/tableView/${item.id}`, query: item } }>{item.first_name}</Link></td>
                        <td><Link to={{ pathname: `/tableView/${item.last_name}`, query: item } }>{item.last_name}</Link></td>
                        <td><Link to={{ pathname: `/tableView/${item.gender}`, query: item } }>{item.gender}</Link></td>                    
            </tr>
        });
        let headers = [<th key="first_name">FirstName</th>,<th key="last_name">LastName</th>,<th key="gender">Gender</th>];
        return (
            <table className="table margin_25_percent width_half">
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