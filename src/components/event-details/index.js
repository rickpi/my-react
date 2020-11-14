import React, { Component } from 'react';
import {
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import Parser from 'html-react-parser';
import {
  Cash,
  CalendarDate,
} from 'react-bootstrap-icons';
import axios from 'axios';

import EventDetailsContact from '../event-details-contact';
import Tags from '../tags';
import './event-details.css';

import url from '../../constants/url';
import API_KEY from '../../constants/API_KEY';

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
    axios.get(`${url}&refine.recordid=${id}`)
      .then((res) => {
        const { records } = res.data;
        const { fields } = records[0];
        const event = {
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
            title: fields.title,
            description: fields.description,
            tags: fields.tags,
            leadText: fields.lead_text,
            cover: fields.cover_url,
            price: fields.price_type,
            url: fields.url,
            date: fields.date_description,
            pmr: fields.pmr,
            deaf: fields.deaf,
            blind: fields.blind,
          },
        };
        this.setState({
          event,
          isReady: true,
          id,
        });
      });
  }

  render() {
    const { event, isReady } = this.state;

    if (!isReady) {
      return <Spinner className="ml-4 mt-4" animation="border" />;
    }

    const { address, about } = event;

    return (
      <Row className="event-detail__container">
        <Col
          xs="12"
          className="event-detail__head"
          style={{
            backgroundImage: `url('${about.cover}')`,
          }}
        >
          <h3 className="event-detail__title">{about.title}</h3>
        </Col>
        <Col xs="7" className="mt-4">
          <h5 className="mb-4">{about.leadText}</h5>
          {Parser(about.description)}
        </Col>
        <Col xs="1">{' '}</Col>
        <Col xs="4">
          <Col className="event-detail__right-block" xs="12">
            <h5 className="mb-3">A propos</h5>
            <Col xs="12" className="mb-3 event-detail__price">
              <Cash className="mr-3" />
              <span>{about.price}</span>
            </Col>
            <Col xs="12" className="mb-3 event-detail__date">
              <CalendarDate className="mr-3" />
              <div>
                {Parser(about.date)}
              </div>
            </Col>
            <h5 className="mb-3 mt-4">Localisation</h5>
            <Col xs="12" className="mb-3">
              {Parser(`\
                ${address.name}\
                <br/>\
                <strong>${address.city}</strong>\
                <br/>\
                ${address.zipcode}, ${address.street}\
              `)}
            </Col>
            <Col className="event-detail__map mb-3" xs="12">
              <iframe
                frameBorder="0"
                src={`https://www.google.com/maps/embed/v1/place?\
                  key=${API_KEY}&\
                  q=${encodeURI(`${address.street},${address.city} France`)}\
                `.replace(/ /g, '')}
                title="location"
                allowFullScreen
              />
            </Col>
            <EventDetailsContact contact={event.contact} />
            <Col xs="12">
              <Tags tags={about.tags} />
            </Col>
          </Col>
        </Col>
      </Row>
    );
  }
}

export default EventDetails;
