import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {

  state = {
    term: ''
  }
  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }
  onFormSubmit =(event) => {
    event.preventDefault();
    this.props.userSubmits(this.state.term);
  }
  render () {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="form">
          <div className="field">
            <label>Search: </label>
            <input type="text" 
              onChange={this.onInputChange}
              value={this.state.term}></input>
              <button type="submit">Search</button>
          </div>
        </form>
      </div>  
    );
  }
}

export default SearchBar;