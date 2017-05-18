const React = require('react');

const action = require('../actions/toDoAction');
const store = require('../stores/toDoStore');

let Search = require('./search.jsx');

class ToDo extends React.Component {
    constructor() {
        super();
        this.state = {
            items: store.getItems(),
            checkedInput :true
        }
        this.addItem = this.addItem.bind(this);
        this.changeCheck = this.changeCheck.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    changeCheck() {
        this.setState({ checkedInput: !this.state.checkedInput });
    }
    componentWillMount() {
        store.on('update', () => {
            console.log('update');
            this.setState({ items: store.getItems() });
        });
    }
    addItem() {
        const id = new Date().getUTCMilliseconds();
        let contentInput = document.getElementById('content');
        const content = contentInput.value;
        const finished = this.state.checkedInput;
        const item = { id, content, finished };

        action.addItem(item);
        contentInput.value = '';
        this.setState({ checkedInput: true });
    }
    removeItem(event) {
        const id = event.currentTarget.parentElement.parentElement.parentElement.dataset.id;
        action.removeItem(id);
    }
    updateFinished(event) {
        var li = event.currentTarget;
        while ((li = li.parentElement) && li.tagName != 'LI');
        action.changeFinished(id);
    }
    setPattern(pattern) {
        action.findContent(pattern);
    }
    render() {
        let itemsList = this.state.items.map((item,index) => {
            return <li key={item.id} data-id={item.id}  className="list-group-item">
                        <div className="row">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-10">{item.content}</div>
                                    <div className="col-md-2"><input type="checkbox" checked={item.finished} onChange={this.updateFinished} /></div>
                                </div>
                            </div>
                            <div className="col-md-1">
                                  <div className="text-danger cross-button" onClick={this.removeItem}>x</div>
                            </div>
                        </div>
                   </li>
        });
        return(
            <div>
                <h2 className="text-info text-center">ToDo Application</h2>
                <div className="panel well">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-1">
                            <div className="form-group">
                                <div className="input-group">
                                      <span className="input-group-addon">
                                        <input type="checkbox" id="done" checked={this.state.checkedInput} onChange={this.changeCheck} />
                                      </span>
                                      <input type="text" className="form-control" id="content" />
                                </div>
                              
                            </div>
                        </div>
                        <div className="col-md-3">
                              <button className="btn btn-primary" onClick={this.addItem}>Add item</button>
                        </div>
                    </div>
                    <div>
                        <Search search={this.setPattern} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <ul className="list-group">
                            {itemsList}
                        </ul>
                    </div>
                </div>
            </div>
            
        );
    }
}
module.exports = ToDo;