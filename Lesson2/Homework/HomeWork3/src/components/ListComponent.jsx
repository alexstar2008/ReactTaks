const React = require('react');

let List = React.createClass({
    getInitialState(){
        return {
            style: { color: this.getRandomColor() }
        }
    },
    getRandomColor() {
        var h = Math.floor(Math.random() * (255 - 1) + 1); 
        var s = Math.floor(Math.random() * (100 - 1) + 1) + '%'; 
        var l = '50%'; 
        var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
        return randomColor;
    },
    componentWillReceiveProps() {
        const colorComputed = this.getRandomColor();
        this.setState({ style: { color: colorComputed } });
    },
    render() {
        let amount = this.props.limit;
        let visibleItems = [];
        for (let i = 0; i < amount; i++) {
            let item = this.props.list[i];
            visibleItems.push(<li key={i} className="list-group-item">{`Name: ${item.name} | Gender: ${item.gender}`}</li>);
    }
        return(
         <ul className="list-group" style={this.state.style}>
            { visibleItems }
         </ul>   
        );
    }
});
module.exports = List;