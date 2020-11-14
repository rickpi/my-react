import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import {
  Cash,
  CalendarDate,
} from 'react-bootstrap-icons';
import Parser from 'html-react-parser';

const AccessItem = ({ typeAccess }) => (
  <li className="event-detail__access__item">
    <span />
    {`Accès ${typeAccess}`}
  </li>
);

const EventDetailsLocation = ({ about }) => {
  const pmr = about.pmr ? <AccessItem typeAccess="PMR" /> : null;
  const deaf = about.deaf ? <AccessItem typeAccess="mal entendant" /> : null;
  const blind = about.blind ? <AccessItem typeAccess="mal voyant" /> : null;

  return (
    <Row>
      <h5 className="mb-3 ml-2">A propos</h5>
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
      <Col xs="12" as="ul" className="mb-3 event-detail__access">
        {pmr}
        {deaf}
        {blind}
      </Col>
    </Row>
  );
};

export default EventDetailsLocation;
