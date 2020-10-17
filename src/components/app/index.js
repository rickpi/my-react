import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Navigation from '../navigation';
import Main from '../main';
import Sidebar from '../sidebar';

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
        <Container>
          <Row>
            <Main inputValue={inputValue} />
            <Col xs="3">
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default App;
