// ./react-redux-client/src/components/SearchForm/SearchForm.js
import React from 'react';
import { Button } from 'react-bootstrap';

class SearchForm extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        this.props.onSearch();
    }
  
    render() {
      return (
        <form className='search-form'>
            <Button
                bsStyle='primary'
                bsSize='large'
                onClick={this.handleClick}
            >
                Search
            </Button>
        </form>
      );
    }
  }

  export default SearchForm