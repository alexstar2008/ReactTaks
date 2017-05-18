const React = require('react');
const ReactDOM = require('react-dom');

let Form = React.createClass({
    render() {
        return (
            <form>
               <Form.Name />
               <Form.Login />
               <Form.Submit />
            </form>
        )
    }
});
Form.Name = React.createClass({
    render() {
        return (
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" className="form-control" placeholder="Ivan" id="name" />
            </div>            
        );
    }
});
Form.Login = React.createClass({
    render() {
        return (
           <div className="form-group">
                <label for="login">Login:</label>
                <input type="text" className="form-control" placeholder="ivanko2012" id="login" />
           </div>
         );
    }
});
Form.Submit = React.createClass({
    render() {
        return (<input type="submit" className="btn btn-info" value="Submit Form" />);
    }
});


ReactDOM.render(<Form />,document.getElementById('result'));