const React = require('react');
const ReactDOM = require('react-dom');


let router = require('react-router');
let hashHistory = router.hashHistory;
let Router = router.Router;
let Route = router.Route;
let IndexRoute = router.IndexRoute;



let Provider = require('react-redux').Provider;
let redux = require('redux');
let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;
let thunk = require('redux-thunk').default; 

let TodoReducer = require('./reducers/todoReducer');
let App = require('./pages/app.jsx');
let About = require('./pages/about.jsx');
let Edit = require('./pages/edit.jsx');

let store = createStore(TodoReducer,applyMiddleware(thunk));

let fetchTodos = require('./actions/todoActions').fetchTodos;
store.dispatch(fetchTodos());


ReactDOM.render(
     <Provider store={store}>
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={App} />
            <Route path='about' component={About}></Route>
            <Route path='edit' component={Edit}></Route>
        </Route>
    </Router>
     </Provider>
    ,document.getElementById('container'));