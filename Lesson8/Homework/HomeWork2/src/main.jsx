const React = require('react');
const ReactDOM = require('react-dom');


let Provider = require('react-redux').Provider;
let redux = require('redux');
let createStore = redux.createStore;
let applyMiddleware = redux.applyMiddleware;
let thunk = require('redux-thunk').default; 

let TodoReducer = require('./reducers/todoReducer');
let App = require('./pages/app.jsx');

let store = createStore(TodoReducer,applyMiddleware(thunk));

let fetchTodos = require('./actions/todoActions').fetchTodos;
store.dispatch(fetchTodos());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('container'));