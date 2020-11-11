import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';

import Criteria from '../criteria';

class Advanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  render() {
    const { isReady } = this.state;

    return (
      <Row>
        <Col xs="9">
          <h3 className="mt-4">Recherche avancée</h3>
          <Row className="mt-4">{isReady}</Row>
        </Col>
        <Criteria />
      </Row>
    );
  }
}

export default Advanced;
