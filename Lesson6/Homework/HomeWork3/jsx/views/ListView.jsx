const React = require('react');
const router = require('react-router');
let Link = router.Link;

class ListView extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.route.users);
    }
    render() {
        let list = this.props.route.users.map((item) => {
            return <li key={item.id }><Link to={{ pathname: `listView/${item.id}`, query: item } }>{`FirstName: ${item.first_name} || LastName: ${item.last_name}`}</Link></li>
        });
        return (
            <ul className="list margin_25_percent" >
                {list}
            </ul>
        );  
    }
}

module.exports = ListView;