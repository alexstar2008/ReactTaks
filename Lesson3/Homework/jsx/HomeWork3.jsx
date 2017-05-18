const React = require('react');
const ReactDOM = require('react-dom');


let MessageBlock = React.createClass({
    getDefaultProps(){
        return{
            message:'Uncorrect  input'
        }
    },
    render() {
        return(
         <p className="alert alert-danger" >
            {this.props.message}
         </p>
        );
    }
});

let FormCustom = React.createClass({
    getInitialState(){
        return {
            validationError: {
                name: '',
                email: '',
                phone: '',
                message: false
            },
            values: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    },
    submitHander(event) {
        let errors = false;
        for (let key in this.state.validationError) {
            if (this.state.validationError[key] ) {
                errors = true;
            }
            if (this.state.validationError[key] === '') {
                let messageError = this.state.validationError;
                messageError[key] = true;
                this.setState({ validationError: messageError });
                errors = true;
            }
        }
        if (!errors) {
            alert('Data was sended');
            console.log(JSON.stringify(this.state.values));
        } else {
            event.preventDefault();
            alert('Error. Check all field');
        }
    },
    inputHandler(event) {
        const target = event.target;
        const pattern = new RegExp(target.getAttribute('pattern'));
        let messageError = this.state.validationError;
        if (!pattern.test(target.value)) {
            messageError[target.name] = true;
            this.setState({ validationError: messageError });
            target.style.backgroundColor = 'lightcoral';
        } else {
            messageError[target.name] = false;
            target.style.backgroundColor = 'lightgreen';
            this.state.values[target.name] = target.value;
        }
        this.setState({ validationError: messageError });
    },
    render() {
        let errors = {
            name: () => { if (this.state.validationError.name) return <MessageBlock />; else return ''; },
            email: () => { if (this.state.validationError.email) return <MessageBlock />; else return ''; },
            phone: () => { if (this.state.validationError.phone) return <MessageBlock />; else return ''; },
            message: () => { if (this.state.validationError.message) return <MessageBlock />; else return ''; }
        };
        return (
            <form onSubmit={this.submitHander} noValidate>            
                <h2>Form Custom</h2>
                <div className="form-group">
                    <label form="name">Name: </label>
                    <input type="text" id="name" className="form-control" 
                           onChange={this.inputHandler} pattern="^[a-zA-Z0-9]+$" name="name" />
                    {errors.name()}
                </div>
                  <div className="form-group">
                    <label form="email">Email: </label>
                    <input type="text" id="email" className="form-control" 
                           onChange={this.inputHandler} pattern="^[a-zA-Z0-9_.]*@+[a-zA-Z0-9_.]*$" name="email" />
                    {errors.email()}
                  </div>
                  <div className="form-group">
                    <label form="name">Phone: </label>
                    <input type="text" id="phone" className="form-control" 
                           onChange={this.inputHandler} pattern="^[+0-9]+$" name="phone" />
                    {errors.phone()}
                  </div>
                  <div className="form-group">
                    <label form="message">Message: </label>
                    <textarea  id="message" className="form-control" 
                              onChange={this.inputHandler} pattern="^[\S\s]{1,100}$" name="message"></textarea>
                      {errors.message()}
                  </div>
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </form>

        );
    }
});

ReactDOM.render(<FormCustom/>,document.getElementById('main'));