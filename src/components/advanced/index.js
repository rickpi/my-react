import React, { Component } from 'react';
import {
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import axios from 'axios';

import Criteria from '../criteria';
import Event from '../event';
import url from '../../constants/url';

const formatAccess = (access) => {
  const value = Object.values(access)[0] ? 1 : 0;
  const key = Object.keys(access)[0];

  if (value === 1) return `&refine.${key}=${value}`;
  return '';
};

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
    const { pmr, deaf, blind } = criteria;
    const query = `${url}&rows=6&q=${formatAccess({ pmr })}${formatAccess({ deaf })}${formatAccess({ blind })}`;

    console.log(query);

    this.setState({
      isSearching: true,
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
