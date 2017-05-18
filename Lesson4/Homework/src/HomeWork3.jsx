const React = require('react');
const ReactDOM = require('react-dom');

import { users } from './HomeWork2.js';

class TableUsers extends React.Component {
    constructor(props){
        super(props);   
        this.showSayHi = this.showSayHi.bind(this);

        this.headerItems=[];
        this.items = this.props.users.map((item,keys)=>{
            let itemProps=[];
            for(let key in item){
                if(keys == 0)
                    this.headerItems.push(<th key={key+"head"}>{key}</th>);
                if(key == 'firstName' || key == 'lastName' )
                    itemProps.push(<td onClick={this.showSayHi} key={key+keys} className='hoverItems'>{item[key]}</td>);
                else
                    itemProps.push(<td key={key+keys}>{item[key]}</td>);
            }
            return (<tr key={keys} id={keys}>{itemProps}</tr>);
        });

    }
    showSayHi(event){
        const index = event.target.parentElement.getAttribute('id');
        this.props.users[index].sayHi();
    }    

    render(){
        return (
            <table className="table">
                <thead>
                    <tr>{this.headerItems}</tr>
                </thead>
                <tbody>
                    {this.items}
                </tbody>   
            </table>
        );
    }

}

ReactDOM.render(<TableUsers users={users} />,document.getElementById('main'));