import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import {
  Cash,
  CalendarDate,
} from 'react-bootstrap-icons';
import Parser from 'html-react-parser';

const EventDetailsLocation = ({ about }) => (
  <Row>
    <h5 className="mb-3 ml-2">A propos</h5>
    <Col xs="12" className="mb-3 event-detail__price">
      <Cash className="mr-3" />
      <span>{about.price}</span>
    </Col>
    <Col xs="12" className="mb-3 event-detail__date">
      <CalendarDate className="mr-3" />
      <div>
        {Parser(about.date)}
      </div>
    </Col>
  </Row>
);

export default EventDetailsLocation;
