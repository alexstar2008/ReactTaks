const React = require('react');

let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
let Link = require('react-router').Link;
const action = require('../actions/todoActions.js');

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.removeItemPrepare = this.removeItemPrepare.bind(this);
        this.addItemPrepare = this.addItemPrepare.bind(this);
        this.saveUpdatePrepare = this.saveUpdatePrepare.bind(this);
        this.updateItemPrepare = this.updateItemPrepare.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            updateText: '',
            updateId:null
        }
    }
    removeItemPrepare(event) {
        let id = event.target.parentElement.dataset.id;
        this.props.removeItem(id);
    }
    updateContent(event){
        this.setState({ updateText: event.target.value });
    }
    updateItemPrepare(event){
        let id = event.currentTarget.parentElement.dataset.id;
        let content = event.currentTarget.parentElement.querySelector('.content').innerText;

        this.setState({ updateText: content, updateId:id});
    }
    saveUpdatePrepare() {
        let content = this.state.updateText;
        let id = this.state.updateId;
        this.props.updateItem(id,content);
    }
    addItemPrepare() {
        let content = document.getElementById('task').value;
        this.props.addItem(content);
    }
    render() {
        let todosList = this.props.todos.map((item) => {
            return <li key={item.id} data-id={item.id} className="list-group-item">
            <span className="content">{item.content}</span>
            <span onClick={this.updateItemPrepare} className="text-info"><i className="icon-edit"></i></span>
            <span onClick={this.removeItemPrepare} className="text-warning custom-remover">X</span></li>;
        });
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                   <h1 className="text-center text-info">Update list</h1>
                     <ul className="list-inline">
                            <li><Link to='/'><button className="btn btn-info">List View</button></Link></li>
                            <li><Link to='/about'><button className="btn btn-info">Rate app</button></Link></li>
                     </ul>
                   <div className="custom-div">
                        <div className="form-group">
                            <label htmlFor="task">Task:&nbsp;</label>
                            <input type="text" id="task" />
                        </div>
                        <button onClick={this.addItemPrepare} className="btn btn-info">Add task</button>
                   </div>
                    <ul className="list-group">{todosList}</ul>
                    <div>
                        <div className="col-md-8">
                            <div className="form-group">
                                <label htmlFor="update">Update item</label>
                                    <input type="text" value={this.state.updateText} onChange={this.updateContent} id="update" className="form-control" />
                            </div>
                             <button onClick={this.saveUpdatePrepare} className="btn btn-default">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
module.exports = Edit;

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addItem: action.addItem,
        removeItem: action.removeItem,
        updateItem : action.updateItem
    }, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Edit);

