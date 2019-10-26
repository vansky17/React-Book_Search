import React from 'react'
import './FilterBar.css'
import PrintType from'../PrintType/PrintType'
import BookType from'../BookType/BookType'

class FilterBar extends React.Component {
  render () {
    return (
      <div className="filter-bar">
        <PrintType printType={this.props.printType}/>
        <BookType bookType={this.props.bookType}/> 
      </div>
    );
  }
}

export default FilterBar;