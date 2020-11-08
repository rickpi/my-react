import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import About from '../about';
import Events from '../events';
import EventDetails from '../event-details';

const Routes = ({ query }) => (
  <Container>
    <Row>
      <Col xs="12">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route
            path="/event/:id"
            render={(props) => {
              const { id } = props.match.params;
              return <EventDetails id={id} />;
            }}
          />
          <Route path="/">
            <Events query={query} />
          </Route>
        </Switch>
      </Col>
    </Row>
  </Container>
);

export default Routes;
