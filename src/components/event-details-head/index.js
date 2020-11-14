import React from 'react';
import {
  Col,
} from 'react-bootstrap';

const EventDetailsHead = ({ title, cover }) => (
  <Col
    xs="12"
    className="event-detail__head"
    style={{
      backgroundImage: `url('${cover}')`,
    }}
  >
    <h3 className="event-detail__title">{title}</h3>
  </Col>
);

export default EventDetailsHead;
