import React from 'react';
import {
  Row,
  Button,
} from 'react-bootstrap';

const Item = ({ tagName }) => (
  <Button variant="warning" size="sm" className="mr-1">
    {tagName}
  </Button>
);

const Tags = ({ tags }) => (
  <Row>
    {tags.split(';').map((tag) => <Item tagName={tag} />)}
  </Row>
);

export default Tags;
