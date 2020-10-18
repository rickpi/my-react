import React from 'react';
import {
  Jumbotron,
  Image,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import Parser from 'html-react-parser';
import {
  Cash,
  CalendarDate,
  Envelope,
} from 'react-bootstrap-icons';
// import { useParams } from 'react-router-dom';

import eventDetails from '../../datas/event-details';
import Tags from '../tags';

const index = () => {
  // const { id } = useParams();
  const { about, address, contact } = eventDetails;

  return (
    <Jumbotron className="mt-4">
      <h2 className="mb-4">{about.title}</h2>
      <Row>
        <Col xs="6">
          <h5 className="mt-2 mb-4">{about.leadText}</h5>
          <p>{Parser(about.description)}</p>
        </Col>
        <Col xs="1">{' '}</Col>
        <Col xs="5">
          <Image className="mb-4" fluid src={about.cover} />
          <h5 className="mb-3">A propos</h5>
          <Row className="mb-3">
            <Col xs="2">
              <h2><Cash /></h2>
            </Col>
            <Col xs="10">{about.price}</Col>
          </Row>
          <Row className="mb-3">
            <Col xs="2">
              <h2><CalendarDate /></h2>
            </Col>
            <Col xs="10">{Parser(about.date)}</Col>
          </Row>
          <h5 className="mb-3 mt-4">Localisation</h5>
          <h6>{address.name}</h6>
          <p className="mb-3">{Parser(`<strong>${address.city}</strong><br/>${address.zipcode}, ${address.street}`)}</p>
          <h5 className="mb-3 mt-4">Contact</h5>
          <h6>{contact.name}</h6>
          <Row className="mb-3">
            <Col xs="1">
              <h5><Envelope /></h5>
            </Col>
            <Col xs="11">{Parser(`<strong>${contact.mail}</strong>`)}</Col>
          </Row>
          <Row className="mb-3">
            <Button size="sm" variant="primary" href={contact.facebook} className="ml-2 mr-1">FACEBOOK</Button>
            <Button size="sm" variant="info" href={contact.twitter}>TWITTER</Button>
          </Row>
          <Row>
            <Button size="sm" variant="secondary" href={contact.url} className="ml-2">Voir le site</Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs="7">{' '}</Col>
        <Col xs="5">
          <Tags tags={about.tags} />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default index;
