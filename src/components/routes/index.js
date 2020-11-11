import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import About from '../about';
import Advanced from '../advanced';
import ToDoInParis from '../to-do-in-paris';
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
          <Route path="/advanced">
            <Advanced />
          </Route>
          <Route path="/">
            <ToDoInParis query={query} />
          </Route>
        </Switch>
      </Col>
    </Row>
  </Container>
);

export default Routes;
