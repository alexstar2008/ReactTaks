const React = require('react');

let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
const action = require('../actions/todoActions.js');

let ListComponent = require('../components/listComponent.jsx');
let TableComponent = require('../components/tableComponent.jsx');


class App extends React.Component {
    constructor(props) {
        super(props);
        this.addItemPrepare = this.addItemPrepare.bind(this);
    }
    addItemPrepare() {
        let content = document.getElementById('task').value;
        this.props.addItem(content);
    }
    render() {
        let todosList = this.props.todos.map((item) => {
            return <li key={item.id} data-id={item.id}>{item.content}<span onClick={this.removeItemPrepare}>X</span></li>;
        });
        let view = null;
        if (this.props.table) {
            view =  <TableComponent todos={this.props.todos} removeItem={(id) => { this.props.removeItem(id); }}  />
        } else {
            view =  <ListComponent todos={this.props.todos} removeItem={(id) => { this.props.removeItem(id); }}  />
        }
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h1 className="text-info">ToDo Application</h1>
                    <div className="custom-div">
                        <div className="form-group">
                            <label htmlFor="task">Task:&nbsp;</label>
                            <input type="text" id="task" />
                        </div>
                        <button onClick={this.addItemPrepare} className="btn btn-info">Add task</button>
                    </div>
                      <label className="checkbox"><input type="checkbox" onClick={this.props.setView} value={this.props.table} />Table</label>
                    {view}
                </div>
            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        todos: state.todos,
        table: state.table
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addItem:action.addItem,
        removeItem: action.removeItem,
        setView: action.setView
    },dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);

