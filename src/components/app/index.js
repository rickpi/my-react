import React, { Component } from 'react';

import Navigation from '../navigation';
import Routes from '../routes';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(typed) {
    this.setState({
      inputValue: typed,
    });
  }

  render() {
    const { inputValue } = this.state;

    return [
      <Navigation
        inputValue={inputValue}
        updateInputValue={this.updateInputValue}
      />,
      <Routes query={inputValue} />,
    ];
  }
}

export default App;
