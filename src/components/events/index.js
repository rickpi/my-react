import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';

import Filters from '../filters';

const EventItem = () => <div>Event</div>;

const Events = () => (
  <Row>
    <Col xs="9">
      <EventItem />
    </Col>
    <Col xs="3">
      <Filters />
    </Col>
  </Row>
);

export default Events;
