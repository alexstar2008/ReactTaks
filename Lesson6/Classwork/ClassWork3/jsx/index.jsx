const React = require('react');
const ReactDOM = require('react-dom');
const router = require('react-router');

let Router = router.Router;
let Route = router.Route;
let hashHistory = router.hashHistory;
let IndexRoute = router.IndexRoute;
let Link = router.Link;
let Redirect = router.Redirect;

let View1 = require('./views/view1.jsx');
let View2 = require('./views/view2.jsx');
let HomeView = require('./views/home.jsx');

class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <ul>
                        <li><Link to="/view1"><button className="btn">View1</button></Link></li>
                        <li><Link to="/view2"><button className="btn">View2</button></Link></li>
                    </ul>
                </div>
                <div className="panel">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


let container = document.getElementById('main');
ReactDOM.render(
   <Router history={hashHistory}>
       <Route path='/' component={App}>
           <IndexRoute component={HomeView}/>
           <Route path='view1' component={View1}/>
           <Route path='view2' component={View2} />
           <Redirect from="*" to="/" /> 
       </Route>
   </Router> 
    
   ,container);