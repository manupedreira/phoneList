// ./react-redux-client/src/components/App/App.js
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import PhoneList from '../PhoneList/PhoneList';
import './App.css';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch() {
      this.props.fetchPhones();
  }

  render() {
    if (!this.props.phones.length) {
        return (
          <div className="App">
              <div className='search-page centered'>
                  <h2>{this.props.error !== '' ? this.props.error : 'Find your mobile phone:'}</h2>
                      <SearchForm onSearch={this.onSearch}/>
                  </div>
              <div className={this.props.loading ? 'loader shown': 'loader'}>
                  <div className='centered'>
                      <img src='https://media.giphy.com/media/11JsOcrkjKrjr2/giphy.gif' alt='Loading...'/>
                      <h2>Loading...</h2>
                  </div>
              </div>
          </div>
        );

    } else {
        return (
          <div className="App">
              <PhoneList phones={this.props.phones} />
          </div>
        );
    }
  }
}

export default App;
