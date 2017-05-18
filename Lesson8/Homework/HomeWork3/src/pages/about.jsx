const React = require('react');

let connect = require('react-redux').connect;
let bindActionCreators = require('redux').bindActionCreators;
let Link = require('react-router').Link;

const action = require('../actions/todoActions.js');



class About extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.starClickHandler = this.starClickHandler.bind(this);

        this.state={
            amountStars:0
        }
    }
    clickHandler() {
        this.props.addMark(this.state.amountStars);
    }
    starClickHandler(event) {
        let amountStars = event.target.value;
        this.setState({ amountStars: amountStars });
    }
    render() {
        return(
          <div className="row">
              <div className="col-md-offset-2 col-md-8">
                  <div>
                      <h1 className="text-center text-info">About</h1>
                       <ul className="list-inline">
                                <li><Link to='/'><button className="btn btn-info">List View</button></Link></li>
                                <li><Link to='/edit'><button className="btn btn-info">Edit List</button></Link></li>
                       </ul>
                       <div id="stars" onClick={this.starClickHandler}>
                           <div class="radio"><label><input type="radio" name="stars" value="1" />1</label></div>
                           <div class="radio"><label><input type="radio" name="stars" value="2" />2</label></div>
                           <div class="radio"><label><input type="radio" name="stars" value="3" />3</label></div>
                           <div class="radio"><label><input type="radio" name="stars" value="4" />4</label></div>
                           <div class="radio"><label><input type="radio" name="stars" value="5" />5</label></div>
                       </div>
                      <button onClick={this.clickHandler} className="btn btn-default">Add Mark</button>
                  </div>
                  <div className="text-info">Avg Rate:{this.props.avgRate}</div>
              </div>
          </div>  
        );
    }
}


function mapStateToProps(state) {
    return {
        avgRate:state.avgRate
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        addMark: action.addMark
    }, dispatch);
}
module.exports = connect(mapStateToProps, matchDispatchToProps)(About);