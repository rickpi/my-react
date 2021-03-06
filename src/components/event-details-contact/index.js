import React from 'react';
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import Parser from 'html-react-parser';
import { Envelope } from 'react-bootstrap-icons';

const ExportButton = ({ variant, href, value }) => (
  <Button size="sm" variant={variant} href={href} className="mr-1">
    {value}
  </Button>
);

const EventDetailsContact = ({ contact }) => {
  let mail = null;

  if (contact.mail) {
    mail = (
      <Col xs="12" className="mb-3">
        <Envelope className="mr-2" />
        {Parser(`<strong>${contact.mail}</strong>`)}
      </Col>
    );
  }
  const facebook = contact.facebook
    ? <ExportButton variant="primary" href={contact.facebook} value="FACEBOOK" />
    : null;
  const twitter = contact.twitter
    ? <ExportButton variant="info" href={contact.twitter} value="TWITTER" />
    : null;
  const site = contact.site
    ? <ExportButton variant="secondary" href={contact.site} value="SITE" />
    : null;

  return (
    <Row>
      <h5 className="mb-3 mt-4 ml-2">Contact</h5>
      <Col xs="12">{contact.name}</Col>
      {mail}
      <Col xs="12" className="mb-2">
        <Row>
          {facebook}
          {twitter}
          {site}
        </Row>
      </Col>
    </Row>
  );
};

export default EventDetailsContact;
