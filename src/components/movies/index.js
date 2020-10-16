import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';

const Item = ({ data }) => {
  const { title, image } = data;

  return (
    <Col xs="3">
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

const Movies = ({ title, movies }) => (
  <div>
    <h4 className="mt-3">{title}</h4>
    <Row>
      {movies.map((item) => <Item data={item} />)}
    </Row>
  </div>
);

export default Movies;
