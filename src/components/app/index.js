import React, { Component } from 'react';

import Navigation from '../navigation';
import Routes from '../routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    const { inputValue } = this.state;

    return [
      <Navigation inputValue={inputValue} />,
      <Routes />,
    ];
  }
}

export default App;
