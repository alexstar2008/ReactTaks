const React = require('react');
const ReactDOM = require('react-dom');

let Provider = require('react-redux').Provider;
let createStore = require('redux').createStore;
let showReducer = require('./reducers/showReducer');

const store = createStore(showReducer);
let App = require('./container/App.jsx');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);