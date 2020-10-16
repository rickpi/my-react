import React from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Navigation from './components/navigation';
import Main from './components/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <Navigation />
    <Container>
      <Row>
        <Col>
          <Main />
        </Col>
        <Col lg="3">
          sidebar
        </Col>
      </Row>
    </Container>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
