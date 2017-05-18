const React = require('react');
const ReactDOM = require('react-dom');

let Provider = require('react-redux').Provider;
let createStore = require('redux').createStore;

let TodoReducer = require('./reducers/todoReducer');
let App = require('./pages/app.jsx');

let store = createStore(TodoReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('container'));