const React = require('react');

class UsersList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        let list = this.props.users.map((item) =>{
            return <li key={item.id} className="list-group-item">{item.id}|{item.first_name}|{item.last_name}|{item.email}|{item.gender}</li>
        });
        return(
            <div>
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        );
    }
}
module.exports = UsersList;