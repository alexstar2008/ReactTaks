const React = require('react');
const ReactDOM = require('react-dom');

var users = [{ name: "Anne Montgomery", gender: "Female" },
{ name: "Annie George", gender: "Female" },
{ name: "Gary Butler", gender: "Male" },
{ name: "Lisa Mendoza", gender: "Female" },
{ name: "Marilyn Henry", gender: "Female" },
{ name: "Johnny Tucker", gender: "Male" },
{ name: "Chris Jacobs", gender: "Male" },
{ name: "Benjamin James", gender: "Male" }]

let LimitWrapper = require('./components/ListWrapperComponent.jsx');


ReactDOM.render(<LimitWrapper list={users}/>,document.getElementById('main'));