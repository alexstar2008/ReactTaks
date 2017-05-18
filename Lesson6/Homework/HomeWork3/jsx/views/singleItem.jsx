const React = require('react');

class SingleItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let userData = [];
        let headers = [];
        const query = this.props.location.query;
        for (let key in query) {
            headers.push(<th key={key}>{key}</th>);
            userData.push(<td key={query[key]}>{query[key]}</td>);
        }
     
        return (
            <table className="single-table margin_25_percent">
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    <tr>{userData}</tr>
                </tbody>
            </table>
        );
    }
}


module.exports = SingleItem;