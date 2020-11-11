import React from 'react';
import {
  Row,
  Button,
} from 'react-bootstrap';

const Item = ({ tagName, click }) => (
  <Button variant="warning" size="sm" className="mr-1 mb-1" onClick={() => click(tagName)}>
    {tagName}
  </Button>
);

const LinkedTags = ({ tags, clickOnTag }) => {
  if (tags) {
    return (
      <Row>
        {tags.split(';').map((tag) => <Item tagName={tag} click={clickOnTag} key={tag} />)}
      </Row>
    );
  }
  return <Row>{' '}</Row>;
};

export default LinkedTags;
