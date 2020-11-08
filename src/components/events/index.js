import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Button,
  Spinner,
} from 'react-bootstrap';
import { Cash, Building } from 'react-bootstrap-icons';
import axios from 'axios';

import Filters from '../filters';
import Tags from '../tags';

import url from '../../constants/url';

const EventItem = ({ data }) => {
  const {
    title,
    coverUrl,
    leadText,
    priceType,
    addressCity,
    tags,
    id,
  } = data;
  let footer = null;

  if (tags) {
    footer = (
      <Card.Footer>
        <Card.Text><Tags tags={tags} /></Card.Text>
      </Card.Footer>
    );
  }

  return (
    <Col xs="4" className="mb-4">
      <Card text="white" bg="dark">
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Img variant="top" src={coverUrl} />
        <Card.Body>
          <Card.Subtitle>{leadText}</Card.Subtitle>
          <Card.Text>
            <Row>
              <Col xs="6">
                <Cash className="mr-2" />
                {priceType}
              </Col>
              <Col xs="6">
                <Building className="mr-2" />
                {addressCity}
              </Col>
            </Row>
          </Card.Text>
          <Button variant="outline-light" href={`/event/${id}`} size="md">Voir le détail</Button>
        </Card.Body>
        {footer}
      </Card>
    </Col>
  );
};

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

class Events extends Component {
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
  }

  componentDidMount() {
    const { tags, query } = this.state;

    console.log('componentDidMount');

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
    axios.get(`${url}&rows=6&q=${query}&${formatTags(selectedTags)}`)
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

  render() {
    const { events, isReady } = this.state;
    let displayedComponent;

    if (isReady) {
      displayedComponent = events.map((event) => <EventItem data={event} />);
    } else {
      displayedComponent = <Spinner className="ml-4 mb-4" animation="border" />;
    }

    return (
      <Row>
        <Col xs="9">
          <h3 className="mt-4">Que faire à Paris ?</h3>
          <h4 className="mt-4">{`Résultats : ${events.length}`}</h4>
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

export default Events;
