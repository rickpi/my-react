import React from 'react';
import {
  Row,
  Button,
  Card,
  Col,
} from 'react-bootstrap';
import { Cash, Building } from 'react-bootstrap-icons';

import Tags from '../tags';
import './event.css';

const Event = ({ data }) => {
  const {
    title,
    leadText,
    priceType,
    addressCity,
    tags,
    id,
    coverUrl,
  } = data;
  let footer = null;

  if (tags) {
    footer = (
      <Card.Footer>
        <Card.Text as="div"><Tags tags={tags} /></Card.Text>
      </Card.Footer>
    );
  }

  return (
    <Col xs="4" className="mb-4">
      <Card text="white" bg="dark">
        <Card.Header as="h5">{title}</Card.Header>
        <div className="event__cover">
          <img src={coverUrl} alt="" />
        </div>
        <Card.Body>
          <Card.Subtitle className="mb-3">{leadText}</Card.Subtitle>
          <Card.Text as="div" className="mb-3">
            <Row>
              <Col xs="5">
                <Cash className="mr-2" />
                {priceType}
              </Col>
              <Col xs="7">
                <Building className="mr-2" />
                {addressCity}
              </Col>
            </Row>
          </Card.Text>
          <Button
            variant="outline-light"
            href={`/event/${id}`}
            size="md"
          >
            Voir en détails
          </Button>
        </Card.Body>
        {footer}
      </Card>
    </Col>
  );
};

export default Event;
