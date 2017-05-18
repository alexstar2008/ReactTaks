import React from 'react';

export default class NewUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:''
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }
    clickHandler(event){
        this.props.addNew(this.state.name);
    }
    changeHandler(event){
        this.setState({name:event.target.value});
    }
    render(){
        return(
            <div className="form-group">
                <label for="input">Enter users name</label>
                <input type="text"  onChange={this.changeHandler} className="form-control" id="input"/>
                <button onClick={this.clickHandler} className="btn btn-primary">AddNew</button>
            </div>
        );

    }
}