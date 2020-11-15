import React, { Component } from 'react';
import {
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import Parser from 'html-react-parser';
import axios from 'axios';

import './event-details.css';
import EventDetailsHead from '../event-details-head';
import EventDetailsAbout from '../event-details-about';
import EventDetailsLocation from '../event-details-location';
import EventDetailsContact from '../event-details-contact';
import Tags from '../tags';

import BASE_URL from '../../constants/BASE_URL';

class EventDetails extends Component {
  constructor(props) {
    super(props);
    const { id } = props;
    this.state = {
      event: null,
      isReady: false,
      id,
    };
  }

  componentDidMount() {
    const { id } = this.state;
    axios.get(`${BASE_URL}&refine.recordid=${id}`)
      .then((res) => {
        const { records } = res.data;
        const { fields } = records[0];
        const event = {
          description: fields.description,
          title: fields.title,
          tags: fields.tags,
          leadText: fields.lead_text,
          cover: fields.cover_url,
          contact: {
            name: fields.contact_name,
            link: fields.contact_url,
            phone: fields.contact_phone,
            facebook: fields.contact_facebook,
            mail: fields.contact_mail,
            twitter: fields.contact_twitter,
          },
          address: {
            city: fields.address_city,
            name: fields.address_name,
            street: fields.address_street,
            zipcode: fields.address_zipcode,
          },
          about: {
            url: fields.url,
            date: fields.date_description,
            pmr: fields.pmr,
            deaf: fields.deaf,
            blind: fields.blind,
            price: fields.price_type,
          },
        };
        this.setState({
          event,
          isReady: true,
        });
      });
  }

  render() {
    const { event, isReady } = this.state;

    if (!isReady) {
      return <Spinner className="ml-4 mt-4" animation="border" />;
    }

    return (
      <Row className="event-detail__container">
        <EventDetailsHead title={event.title} cover={event.cover} />
        <Col xs="7" className="mt-4">
          <h5 className="mb-4 mt-4">{event.leadText}</h5>
          {Parser(event.description)}
        </Col>
        <Col xs="1" />
        <Col xs="4">
          <Col className="event-detail__right-block px-4 py-3" xs="12">
            <EventDetailsAbout about={event.about} />
            <EventDetailsLocation address={event.address} />
            <EventDetailsContact contact={event.contact} />
            <Tags tags={event.tags} />
          </Col>
        </Col>
      </Row>
    );
  }
}

export default EventDetails;
