const React = require('react');
const ReactDOM = require('react-dom');


var Calculus = React.createClass({
    getInitialState(){
        return {
            paramA: 0,
            paramB: 0,
            res:''
        }
    },
    makeCalc(type) {
        const a = this.state.paramA;
        const b = this.state.paramB;
        let res = eval(`${a}${type}${b}`);
        this.setState({res:res});
    },
    inputHandler(event) {
        if (!(/[0-9]/).test(event.key)) {
            event.preventDefault();
        }
    },
    changeHandler(event) {
        let target = event.target;
        this.setState({ [target.name]: target.value });
    },
    render() {
        return(
           <div className="panel well">
               <div className="form-group">
                   <input type="text" onKeyPress={this.inputHandler} onChange={this.changeHandler} name="paramA"/>
                   <input type="text" onKeyPress={this.inputHandler}  onChange={this.changeHandler} name="paramB"/>
                   <h2>Result {this.state.res}</h2>
               </div>
               <div className="form-group">
                   <button onClick={() =>this.makeCalc('+')}>Сложение</button>
                   <button onClick={() =>this.makeCalc('-')}>Вычитание</button>
                   <button onClick={() =>this.makeCalc('*')}>Умножение</button>
                   <button onClick={() =>this.makeCalc('/')}>Деление</button>
               </div>
           </div>
        );
    }
});


ReactDOM.render(<Calculus />,document.getElementById('main'));