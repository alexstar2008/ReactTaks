const React = require('react');
const ReactDOM = require('react-dom');

let Provider = require('react-redux').Provider;
const redux = require('redux');
let showReducer = require('./reducers/showReducer');
let thunk = require('redux-thunk').default;

const store = redux.createStore(showReducer,redux.applyMiddleware(thunk));
let App = require('./container/App.jsx');

let fetchUsers = require('./actions/clickAction').fetchUsers;
store.dispatch(fetchUsers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);