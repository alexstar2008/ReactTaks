const React = require('react');

class Search extends React.Component {
    constructor(props){
        super(props);
        this.searchContent = this.searchContent.bind(this);
    }
    searchContent() {
        let pattern = document.getElementById('searchInput').value;
        this.props.search(pattern);
    }
    render() {
        return (
          <div className="row">
              <div className="col-md-offset-1 col-md-2">
                  <div class="form-group">
                    <label for="searchInput">Filter:&nbsp;</label>
                    <input type="text" id="searchInput" />
                  </div>
              </div>
              <div className="col-md-1">
                  <button className="btn btn-info" onClick={this.searchContent}>Search</button>
              </div>          
          </div>
        );
    }
  
}
module.exports = Search;