const React = require('react');
const ReactDOM = require('react-dom');

let Provider = require('react-redux').Provider;
let createStore = require('redux').createStore;

let textReducer = require('./reducers/textReducer');
let App = require('./pages/app.jsx');

let store = createStore(textReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);