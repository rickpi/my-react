import React, { Component } from 'react';
import {
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import axios from 'axios';

import Criteria from '../criteria';
import Event from '../event';

import URL from '../../constants/BASE_URL';

const formatPrice = (free) => (free ? '&refine.price_type=gratuit' : '');

const formatAccess = (access) => {
  const value = Object.values(access)[0] ? 1 : 0;
  const key = Object.keys(access)[0];

  return value === 1 ? `&refine.${key}=${value}` : '';
};

const formatCategory = (category) => (
  category !== '' ? `&refine.category=${encodeURI(category)}` : ''
);

class Advanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      isReady: false,
      events: [],
    };
    this.search = this.search.bind(this);
  }

  search(criteria) {
    const {
      pmr,
      deaf,
      blind,
      free,
      rows,
      date,
      category,
    } = criteria;
    const query = `\
      ${URL}\
      &rows=${rows}\
      &q=${date}\
      ${formatAccess({ pmr })}\
      ${formatAccess({ deaf })}\
      ${formatAccess({ blind })}\
      ${formatPrice(free)}\
      ${formatCategory(category)}`
      .replace(/ /g, '');

    this.setState({
      isSearching: true,
      isReady: false,
      events: [],
    });
    axios.get(query)
      .then((res) => {
        const events = res.data.records.map(({ recordid, fields }) => ({
          title: fields.title,
          leadText: fields.lead_text,
          coverUrl: fields.cover_url,
          tags: fields.tags,
          priceType: fields.price_type,
          addressCity: fields.address_city,
          id: recordid,
        }));
        this.setState({
          events,
          isReady: true,
        });
      });
  }

  render() {
    const { isSearching, isReady, events } = this.state;
    let displayedComponent = null;

    if (isSearching) {
      if (isReady) {
        displayedComponent = events.map((event) => <Event data={event} key={event.id} />);
      } else {
        displayedComponent = <Spinner className="ml-4 mb-4" animation="border" />;
      }
    }

    return (
      <Row>
        <Col xs="9">
          <h3 className="mt-4">Recherche avancée</h3>
          <Row className="mt-4">{displayedComponent}</Row>
        </Col>
        <Criteria search={this.search} />
      </Row>
    );
  }
}

export default Advanced;
