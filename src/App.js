import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar'
import FilterBar from './FilterBar/FilterBar'
import BooksList from './BooksList/BooksList'

class App extends React.Component {
  state = { 
    books: [],
    printFilter: 'all',
    bookFilter: 'ebooks'
   }

  onSearchSubmit = (term) => {
    const key = 'key=AIzaSyDQD1_rb8WSRlCVIVtscwWykcHL_Cf-2-k';
    const endPoint= 'https://www.googleapis.com/books/v1/volumes?';
    const query = 'q='+term; 
    const printSelector = "printType="+this.state.printFilter;
    const bookSelector = 'filter=' + this.state.bookFilter;
    const url = endPoint + query + '&'+key + '&' + printSelector + '&' + bookSelector; 
    fetch(url).then(response => {
      return response.json();}
      ).then(responseJson => {
        console.log(responseJson);
        this.setState({ books: responseJson.items});
      });

  }
  handlePrintType = ( printTypeFormEvent ) => {
    this.setState({
      printFilter: printTypeFormEvent
    });
    
  }

  handleBookType = ( bookTypeFormEvent ) => {
    this.setState({
      bookFilter: bookTypeFormEvent
    });
  }
  
  render () {
    return (
      <div className="App">
        <Header />
        <SearchBar userSubmits={this.onSearchSubmit}/>
        <FilterBar printType={this.handlePrintType} bookType={this.handleBookType}/>
        <BooksList books={this.state.books}/>
      </div>
    );
  }
  
}

export default App;
