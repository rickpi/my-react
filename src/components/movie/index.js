import React from 'react';

import {
  Col,
  Card,
  Button,
} from 'react-bootstrap';

const Movie = ({ data }) => {
  const { title, image } = data;

  return (
    <Col lg="3">
      <Card>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movie;
