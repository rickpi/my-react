import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import Parser from 'html-react-parser';
import API_KEY from '../../constants/API_KEY';

const EventDetailsLocation = ({ address }) => (
  <Row>
    <h5 className="mb-3 mt-4 ml-2">Localisation</h5>
    <Col xs="12" className="mb-3">
      {Parser(`\
        ${address.name}\
        <br/>\
        <strong>${address.city}</strong>\
        <br/>\
        ${address.zipcode}, ${address.street}\
      `)}
    </Col>
    <Col className="event-detail__map mb-3" xs="12">
      <iframe
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?\
          key=${API_KEY}&\
          q=${encodeURI(`${address.street},${address.city} France`)}\
        `.replace(/ /g, '')}
        title="location"
        allowFullScreen
      />
    </Col>
  </Row>
);

export default EventDetailsLocation;
