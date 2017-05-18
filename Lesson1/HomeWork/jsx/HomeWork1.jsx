const React = require('react');
const ReactDOM = require('react-dom');

var users = [{ name: "Anne Montgomery", gender: "Female" },
{ name: "Annie George", gender: "Female" },
{ name: "Gary Butler", gender: "Male" },
{ name: "Lisa Mendoza", gender: "Female" },
{ name: "Marilyn Henry", gender: "Female" },
{ name: "Johnny Tucker", gender: "Male" },
{ name: "Chris Jacobs", gender: "Male" },
{ name: "Benjamin James", gender: "Male" }]


let TableUsers = React.createClass({
    render() {
        var currentArray = this.props.info;
        var headerList = [];

        for (var key in currentArray[0]) {
            headerList.push(<th key={key }>{key}</th>);
        }

        var usersList = currentArray.map((item, key) => {
            return (
                <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                </tr>
            );
        });
        return (
            <table className="table">
                <thead>
                    <tr>
                        {headerList}
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
       );
    }
});

ReactDOM.render(<TableUsers info={users } />, document.getElementById('result'));