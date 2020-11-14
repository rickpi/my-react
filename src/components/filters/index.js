import React, { Component } from 'react';
import {
  Col,
} from 'react-bootstrap';

import LinkedTags from '../linkedTags';

import TAGS_LIST from '../../constants/TAGS_LIST';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: TAGS_LIST,
      tagsSelected: [],
    };
    this.handleClickOnTag = this.handleClickOnTag.bind(this);
    this.handleClickOnSelectedTag = this.handleClickOnSelectedTag.bind(this);
  }

  handleClickOnTag(tagName) {
    const { tags, tagsSelected } = this.state;
    const { tagsFilter } = this.props;
    const index = tags.indexOf(tagName);

    tags.splice(index, 1);
    tagsSelected.push(tagName);
    this.setState({
      tags,
      tagsSelected,
    });
    tagsFilter(tagsSelected);
  }

  handleClickOnSelectedTag(tagName) {
    const { tags, tagsSelected } = this.state;
    const { tagsFilter } = this.props;
    const index = tagsSelected.indexOf(tagName);

    tagsSelected.splice(index, 1);
    tags.push(tagName);
    this.setState({
      tags,
      tagsSelected,
    });
    tagsFilter(tagsSelected);
  }

  render() {
    const { tags, tagsSelected } = this.state;

    return (
      <Col xs="3">
        <h3 className="mt-4">Mots clés</h3>
        <LinkedTags tags={tags.join(';')} clickOnTag={this.handleClickOnTag} />
        <hr />
        <h3 className="mt-4">Filtres</h3>
        <LinkedTags tags={tagsSelected.join(';')} clickOnTag={this.handleClickOnSelectedTag} />
      </Col>
    );
  }
}

export default Filters;
