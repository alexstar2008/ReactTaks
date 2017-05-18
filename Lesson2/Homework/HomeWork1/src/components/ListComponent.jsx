const React = require('react');

let List = React.createClass({
    render() {
        let amount = this.props.limit;
        let visibleItems = [];
        for (let i = 0; i < amount; i++) {
            let item = this.props.list[i];
            visibleItems.push(<li key={i} className="list-group-item">{`Name: ${item.name} | Gender: ${item.gender}`}</li>);
    }
        return(
         <ul className="list-group">
            { visibleItems }
         </ul>   
        );
    }
});
module.exports = List;