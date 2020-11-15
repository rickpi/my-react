import React from 'react';
import {
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
        <Card.Header className="event__title" as="h5">{title}</Card.Header>
        <div className="event__cover">
          <img src={coverUrl} alt="" />
        </div>
        <Card.Body>
          <Card.Subtitle as="p" className="mb-3 event__subtitle">{leadText}</Card.Subtitle>
          <Card.Text as="div" className="mb-3">
            <Col xs="12 cash">
              <Cash className="mr-2" />
              {priceType}
            </Col>
            <Col xs="12 building">
              <Building className="mr-2" />
              {addressCity}
            </Col>
          </Card.Text>
          <Button
            variant="outline-light"
            href={`/event/${id}`}
            size="sm"
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
