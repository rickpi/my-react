import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Spinner,
} from 'react-bootstrap';
import axios from 'axios';

import Filters from '../filters';
import Event from '../event';

import url from '../../constants/url';

const formatTags = (tags) => {
  let formattedTags = '';

  if (tags.length === 0) return null;

  if (tags.length === 1) return `refine.tags=${encodeURI(tags[0])}`;

  for (let i = 0; i < tags.length; i += 1) {
    formattedTags += `refine.tags=${encodeURI(tags[i])}`;
    if ((i + 1) !== tags.length) formattedTags += '&';
  }

  return formattedTags;
};

class ToDoInParis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isReady: false,
      tags: [],
      query: props.query,
    };
    this.moreEvents = this.moreEvents.bind(this);
    this.handleTagsFilter = this.handleTagsFilter.bind(this);
    this.queryReceived = this.queryReceived.bind(this);
  }

  componentDidMount() {
    const { tags, query } = this.state;

    axios.get(`${url}&rows=6&q=${query}&${formatTags(tags)}`)
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
          tags,
          query,
        });
      });
  }

  moreEvents() {
    const { events, tags, query } = this.state;
    const nbEvents = events.length;

    this.setState({
      events,
      isReady: false,
      tags,
      query,
    });
    axios.get(`${url}&rows=3&start=${nbEvents}&q=${query}&${formatTags(tags)}`)
      .then((res) => {
        const newEvents = res.data.records.map(({ recordid, fields }) => ({
          title: fields.title,
          leadText: fields.lead_text,
          coverUrl: fields.cover_url,
          tags: fields.tags,
          priceType: fields.price_type,
          addressCity: fields.address_city,
          id: recordid,
        }));
        this.setState({
          events: events.concat(newEvents),
          isReady: true,
          tags,
          query,
        });
      });
  }

  handleTagsFilter(selectedTags) {
    const { query } = this.state;

    this.setState({
      events: [],
      isReady: false,
      tags: selectedTags,
      query,
    });
    axios.get(`${url}&rows=6&q=${encodeURI(query)}&${formatTags(selectedTags)}`)
      .then((res) => {
        const newEvents = res.data.records.map(({ recordid, fields }) => ({
          title: fields.title,
          leadText: fields.lead_text,
          coverUrl: fields.cover_url,
          tags: fields.tags,
          priceType: fields.price_type,
          addressCity: fields.address_city,
          id: recordid,
        }));
        this.setState({
          events: newEvents,
          isReady: true,
          tags: selectedTags,
          query,
        });
      });
  }

  queryReceived() {
    const { tags } = this.state;
    const { query } = this.props;

    this.setState({
      events: [],
      isReady: false,
      tags,
      query,
    });
    axios.get(`${url}&rows=6&q=${encodeURI(query)}&${formatTags(tags)}`)
      .then((res) => {
        const newEvents = res.data.records.map(({ recordid, fields }) => ({
          title: fields.title,
          leadText: fields.lead_text,
          coverUrl: fields.cover_url,
          tags: fields.tags,
          priceType: fields.price_type,
          addressCity: fields.address_city,
          id: recordid,
        }));
        this.setState({
          events: newEvents,
          isReady: true,
          tags,
          query,
        });
      });
  }

  render() {
    const { events, isReady, query } = this.state;
    const { query: propsQuery } = this.props;
    let queryString = '';
    let displayedComponent;

    if (isReady) displayedComponent = events.map((event) => <Event data={event} key={event.id} />);
    else displayedComponent = <Spinner className="ml-4 mb-4" animation="border" />;

    if (propsQuery !== query) this.queryReceived();

    if (query !== '') queryString = `pour '${query}' `;

    return (
      <Row>
        <Col xs="9">
          <h3 className="mt-4">Que faire à Paris ?</h3>
          <h4 className="mt-4">{`Résultats ${queryString}: ${events.length}`}</h4>
          <Row className="mt-4">
            {displayedComponent}
          </Row>
          <Button className="mb-4" variant="secondary" onClick={this.moreEvents}>{'Voir plus d\'événements'}</Button>
        </Col>
        <Filters tagsFilter={this.handleTagsFilter} />
      </Row>
    );
  }
}

export default ToDoInParis;
