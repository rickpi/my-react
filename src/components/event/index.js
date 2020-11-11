import React from 'react';
import {
  Row,
  Button,
  Card,
  Col,
} from 'react-bootstrap';
import { Cash, Building } from 'react-bootstrap-icons';

import Tags from '../tags';

const Event = ({ data }) => {
  const {
    title,
    coverUrl,
    leadText,
    priceType,
    addressCity,
    tags,
    id,
  } = data;
  let footer = null;

  if (tags) {
    footer = (
      <Card.Footer>
        <Card.Text><Tags tags={tags} /></Card.Text>
      </Card.Footer>
    );
  }

  return (
    <Col xs="4" className="mb-4">
      <Card text="white" bg="dark">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Img variant="top" src={coverUrl} />
        <Card.Body>
          <Card.Subtitle>{leadText}</Card.Subtitle>
          <Card.Text>
            <Row>
              <Col xs="6">
                <Cash className="mr-2" />
                {priceType}
              </Col>
              <Col xs="6">
                <Building className="mr-2" />
                {addressCity}
              </Col>
            </Row>
          </Card.Text>
          <Button variant="outline-light" href={`/event/${id}`} size="md">Voir en détails</Button>
        </Card.Body>
        {footer}
      </Card>
    </Col>
  );
};

export default Event;
