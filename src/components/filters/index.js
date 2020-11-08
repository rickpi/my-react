import React, { Component } from 'react';
import {
  Col,
} from 'react-bootstrap';

import LinkedTags from '../linkedTags';

import tagsList from '../../constants/tagsList';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: tagsList,
      tagsSelected: [],
    };
  }

  render() {
    const { tags, tagsSelected } = this.state;

    return (
      <Col xs="3">
        <h3 className="mt-4">Mots clés</h3>
        <LinkedTags tags={tags.join(';')} />
        <hr />
        <h3 className="mt-4">Filtres</h3>
        <LinkedTags tags={tagsSelected.join(';')} />
      </Col>
    );
  }
}

export default Filters;
