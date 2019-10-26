import React from 'react';
import './PrintType.css'

class PrintType extends React.Component {

  render() {
    return (
      <div className="print-selector">
        <label>Print Type:</label>
        <form
          action=""
          className="print_type_filter_form"
          onChange={e => this.props.printType(e.target.value)} >
          <select
            name="print-type-filter">
            <option
              value="all">
              All
            </option>
            <option
              value="books">
              Only Books
            </option>
            <option
              value="magazines">
              Only Magazines
            </option>
          </select>
        </form>
      </div>
    );
  }
}

PrintType.defaultProps = {
  books: []
};

export default PrintType;