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

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isReady: false,
      tags: [],
    };
    this.moreEvents = this.moreEvents.bind(this);
    this.formatTags = this.formatTags.bind(this);
  }

  componentDidMount() {
    axios.get(`${url}&rows=6&${this.formatTags()}`)
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

  moreEvents() {
    const { events } = this.state;
    const nbEvents = events.length;

    this.setState({
      events,
      isReady: false,
    });
    axios.get(`${url}&rows=3&start=${nbEvents}&${this.formatTags()}`)
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
        });
      });
  }

  formatTags() {
    const { tags } = this.state;
    let formattedTags = '';

    if (tags.length === 0) return null;

    if (tags.length === 1) return `refine.tags=${encodeURI(tags[0])}`;

    for (let i = 0; i < tags.length; i += 1) {
      formattedTags += `refine.tags=${encodeURI(tags[i])}`;
      if ((i + 1) !== tags.length) formattedTags += '&';
    }

    return formattedTags;
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
        <Col xs="3">
          <Filters />
        </Col>
      </Row>
    );
  }
}

export default Events;
