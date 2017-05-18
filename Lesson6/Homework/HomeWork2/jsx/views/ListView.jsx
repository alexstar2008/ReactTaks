const React = require('react');

class ListView extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.route.users);
    }
    render() {
        let list = this.props.route.users.map((item) => {
            return <li key={item.first_name}>{`FirstName: ${item.first_name} || LastName: ${item.last_name}`}</li>
        });
        return (
            <ul className="list">
                {list}
            </ul>
        );  
    }
}

module.exports = ListView;