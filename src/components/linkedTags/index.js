import React from 'react';
import {
  Row,
  Button,
} from 'react-bootstrap';

const Item = ({ tagName }) => (
  <Button variant="warning" size="sm" className="mr-1 mb-1">
    {tagName}
  </Button>
);

const LinkedTags = ({ tags }) => {
  if (tags) {
    return (
      <Row>
        {tags.split(';').map((tag) => <Item tagName={tag} />)}
      </Row>
    );
  }
  return <Row>{' '}</Row>;
};

export default LinkedTags;
