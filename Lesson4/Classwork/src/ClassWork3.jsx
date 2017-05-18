const React = require('react');
const ReactDOM = require('react-dom');

class ButtonInfo extends React.Component {
    constructor(props){
        super(props);
        this.getPropsInfo = this.getPropsInfo.bind(this);
        this.state = { propsList:[] };
    }
    getPropsInfo(){
        let tempArray = [];
        for(let prop in this.props ){
            tempArray.push(<li key={prop}> { prop } </li>);
        } 
        this.setState({propsList:tempArray});
    }
    render() {
        return(
            <div>
                <button onClick={this.getPropsInfo} className="btn btn-info">Get button props </button>
                <ul>{this.state.propsList}</ul>
            </div>
        );
    }
}
ButtonInfo.defaultProps={ name:'Vasia', age:30 };

ReactDOM.render(<ButtonInfo  name="alex"/>,document.getElementById('main'));