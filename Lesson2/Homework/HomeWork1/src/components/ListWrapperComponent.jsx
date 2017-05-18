const React = require('react');
const ReactDOM = require('react-dom');

let List = require('./ListComponent.jsx');

let LimitWrapper = React.createClass({
    getInitialState(){
        return {
            limit:8
        }
    },
    limitHandler(e) {
        if (!e.target.value)
            return;
        this.setState({limit:parseInt(e.target.value)});
    },

    render() {
        let limitChild = 0;
        if(this.state.limit > 8)
            limitChild = 8;
        else if(this.state.limit < 0){
            limitChild = 0;
        }else{
            limitChild = this.state.limit;
        }
        return (
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="form-group">
                        <label htmlFor="limit">Enter amount of items:&nbsp;</label> 
                        <input type="text" onChange={this.limitHandler} placeholder="" id="limit" className="form-control"/>
                    </div>
                    <List limit={limitChild} list={this.props.list}/>
                </div>
            </div>
        )
}
});
module.exports = LimitWrapper;