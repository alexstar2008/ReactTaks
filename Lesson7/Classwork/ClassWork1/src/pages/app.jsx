const React = require('react');
const action = require('../actions/appAction');
const appStore = require('../stores/appStore');


class App extends React.Component {
    constructor(){
        super();
        this.state={
            divStyle: appStore.getStyle(),
        }
        this.changeStyle = this.changeStyle.bind(this);
    }
    changeStyle(){
        action.changeStyle();
    }
    componentWillMount() {
        appStore.on('change', () => {
            this.setState({ divStyle:appStore.getStyle() });
        });
    }
    render() {
        return(
            <div>
                <div style={this.state.divStyle}>I`m a div (-.-)</div>    
                <button onClick={this.changeStyle} className="btn btn-primary custom-div" >Change style of block</button>
            </div>
        );
    }
}

module.exports = App;