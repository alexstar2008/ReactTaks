const React = require('react');
const ReactDOM = require('react-dom');

let DivStylizer = React.createClass({
    getInitialState() {
        return {
            checked:false
        }
    },
    cheboxHandler() {
        this.setState({ checked: !this.state.checked });
    },
    render() {
        let styles = {};
        if (this.state.checked){
            styles = {
                color: 'green',
                fontSize: '20px',
                border:'2px solid blue'
            }
        }
        return (
            <div>
                <div style={styles}>Test Div</div>
                Add style<input type="checkbox" checked={this.state.checked} onChange={this.cheboxHandler}/>
            </div>
       );
    }
});

ReactDOM.render(<DivStylizer/>, document.getElementById('main'));