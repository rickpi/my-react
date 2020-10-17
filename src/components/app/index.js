import React from 'react';

import Navigation from '../navigation';
import Routes from '../routes';

const App = class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  handleSearch(inputValue) {
    this.setState({
      inputValue,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <Navigation handleSearch={this.handleSearch} />
        <Routes inputValue={inputValue} />
      </div>
    );
  }
};

export default App;
