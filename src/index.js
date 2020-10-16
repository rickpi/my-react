import React from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Navigation from './components/navigation';
import Main from './components/main';
import Sidebar from './components/sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

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

ReactDOM.render(<App />, document.getElementById('app'));
