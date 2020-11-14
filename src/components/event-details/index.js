import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Spinner,
} from 'react-bootstrap';
import Parser from 'html-react-parser';
import {
  Cash,
  CalendarDate,
  Envelope,
} from 'react-bootstrap-icons';
import axios from 'axios';

import Tags from '../tags';
import './event-details.css';

import url from '../../constants/url';

const ExportButton = ({ variant, href, value }) => (
  <Button size="sm" variant={variant} href={href} className="mr-1">
    {value}
  </Button>
);

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

    const { contact, address, about } = event;

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
          <p>{Parser(about.description)}</p>
        </Col>
        <Col xs="1">{' '}</Col>
        <Col className="event-detail__right-block" xs="4">
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
          <h5 className="mb-3 mt-4">Contact</h5>
          <Col xs="12">{contact.name}</Col>
          <Col xs="12" className="mb-3">
            <Envelope className="mr-2" />
            {Parser(`<strong>${contact.mail}</strong>`)}
          </Col>
          <Col xs="12" className="mb-2">
            <Row>
              <ExportButton variant="primary" href={contact.facebook} value="FACEBOOK" />
              <ExportButton variant="info" href={contact.twitter} value="TWITTER" />
              <ExportButton variant="secondary" href={contact.url} value="SITE" />
            </Row>
          </Col>
          <Col xs="12">
            <Tags tags={about.tags} />
          </Col>
        </Col>
      </Row>
    );
  }
}

export default EventDetails;
