import React from 'react';
import ReactDOM from 'react-dom';
import NewUser from './addingUser.component.jsx';

let usersData = ['alex','vasia'];
class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:this.props.users,
            name:'enigma'
        }
        this.setUser = this.setUser.bind(this);
    }
    setUser(name){
        if(name){
            let users = this.state.users;
            users.push(name);
            this.setState({users:users});
        }
    }
    render(){
        let headers = 'name';
        let usersOutput = this.state.users.map((item)=>{return <tr><td key={item}>{item}</td></tr>});
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1 className="text-center">List of Users</h1>
                        <NewUser addNew={this.setUser}/>
                        <table className="table">
                            <thead>
                                <tr><th>{headers}</th></tr>
                            </thead>
                            <tbody>
                                {usersOutput}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<UserList users={usersData}/>,document.getElementById('container'));
