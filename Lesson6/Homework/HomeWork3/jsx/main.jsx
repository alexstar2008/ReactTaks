const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');

let Router = router.Router;
let Route = router.Route;
let IndexRoute = router.IndexRoute;
let Link = router.Link;
let hashHistory = router.hashHistory;

let ListView = require('./views/ListView.jsx');
let TableView = require('./views/TableView.jsx');
let singleView = require('./views/singleItem.jsx')
let users = require('./data.js');

let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component{
    render() {
        const animation = {
            transitionName: 'views',
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 400,
            component: 'div'
        };
        return(
            <div>
                <div className="panel well">
                    <ul>
                        <li><Link to="/listView"><button className="btn">List View</button></Link></li>
                        <li><Link to="/tableView"><button className="btn">Table View</button></Link></li>
                    </ul>
                </div>
               
                    <ReactCSSTransitionGroup {...animation}>
                        {React.cloneElement(this.props.children,{key:Math.random()})}
                    </ReactCSSTransitionGroup>

            </div>    
        );
    }
}

const container = document.getElementById('main');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ListView} users={users} />
            <Route path="listView" component={ListView} users={users} />
            <Route path="listView/:id" component={singleView} />
            <Route path="tableView" component={TableView} users={users}/>
            <Route path="tableView/:id" component={singleView} />
        </Route>
    </Router>
,container);