import React from 'react';
import './BookType.css'

class BookType extends React.Component {

  render() {
    return (
      <div className="book-selector">
        <label>Book Type:</label>
        <form
          action=""
          className="book_type_filter_form"
          onChange={ e => this.props.bookType( e.target.value ) } >
          <select
            name="book-type-filter">
            <option
              value="ebooks">
              All eBooks
            </option>
            <option
              value="free-ebooks">
              Free eBooks
            </option>
            <option
              value="paid-ebooks">
              Paid eBooks
            </option>
            <option
              value="full">
              Fully Available eBooks
            </option>
            <option
              value="partial">
              Partially Available eBooks
            </option>
          </select>
        </form>
      </div>
    );
  }
}

BookType.defaultProps = {
  books: []
};

export default BookType;