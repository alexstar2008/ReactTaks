const React = require('react');

let Table = React.createClass({
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
        let head = [];
        for (let key in head) {
            head.push(<th>key</th>);
        }
        for (let i = 0; i < amount; i++) {
            let item = this.props.list[i];
            visibleItems.push(<tr key={i}><td>{`Name: ${item.name}`}</td><td>{`Gender: ${item.gender}`}</td></tr>);
    }
        return(
         <table className="table" style={this.state.style}>
             <thead>
                 <tr>
                     {head}
                 </tr>
             </thead>
             <tbody>
                 { visibleItems }
             </tbody>
         </table>   
        );
    }
});
module.exports = Table;