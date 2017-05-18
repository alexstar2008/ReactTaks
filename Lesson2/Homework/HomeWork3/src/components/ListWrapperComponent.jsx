const React = require('react');
const ReactDOM = require('react-dom');

let List = require('./ListComponent.jsx');
let Table = require('./TableComponent.jsx');

let LimitWrapper = React.createClass({
    getInitialState(){
        return {
            limit: 8,
            table: false
        }
    },
    limitHandler(e) {
        if (!e.target.value)
            return;
        this.setState({limit:parseInt(e.target.value)});
    },
    changeTable(){
        this.setState({table:!this.state.table});
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
        let showBlock = null;
        if (this.state.table) {
            showBlock = <Table limit={limitChild} list={this.props.list}/>
        } else {
            showBlock = <List limit={limitChild} list={this.props.list}/>
        }
        return (
            <div className="row">
                <div className="col-md-offset-2 col-md-8">
                    <div className="form-group">
                        <label htmlFor="limit">Enter amount of items:&nbsp;</label> 
                        <input type="text" onChange={this.limitHandler} placeholder="" id="limit" className="form-control"/>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" onChange={this.changeTable} value={this.state.table} />Table</label>
                    </div>
                        {showBlock}
                </div>
            </div>
        )
}
});
module.exports = LimitWrapper;