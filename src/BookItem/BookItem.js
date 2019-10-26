import React from 'react';

class BookItem extends React.Component {

  render() {
    const price = this.props.book.saleInfo.saleability !== "NOT_FOR_SALE" && this.props.book.saleInfo.saleability !== "FREE" ? this.props.book.saleInfo.listPrice.currencyCode + "" + this.props.book.saleInfo.listPrice.amount : 'Not for sale or free';
    return (
      <div className="book-item">
        <h2>{this.props.book.volumeInfo.title}</h2>
        <img className="ui image" src={this.props.book.volumeInfo.imageLinks === undefined ? "" : this.props.book.volumeInfo.imageLinks.smallThumbnail} alt={this.props.book.volumeInfo.title} /> 
        <h3 className="author">{this.props.book.volumeInfo.authors}</h3>
        <h4 className="price">{price}</h4>
        <p className="description">{this.props.book.volumeInfo.description}</p>
        <h3> Type of book :{this.props.book.volumeInfo.printType}</h3>
      </div>
    );
  }
}

export default BookItem;