import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import About from '../about';
import Events from '../events';

const Routes = () => (
  <Container>
    <Row>
      <Col xs="12">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Events />
          </Route>
        </Switch>
      </Col>
    </Row>
  </Container>
);

export default Routes;
