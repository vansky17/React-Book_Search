import React from 'react';
import BookItem from '../BookItem/BookItem'; 

class BooksList extends React.Component {
  
  render () {
   const renderedList = this.props.books.map((book) =>{
     return <BookItem key={book.id} book={book}/>
   });
    return <div className="ui relaxed divided list">{renderedList}</div>
  }

}

export default BooksList;