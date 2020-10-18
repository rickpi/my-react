import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import { Cash, Building } from 'react-bootstrap-icons';

import Filters from '../filters';
import Tags from '../tags';

const events = [{
  title: 'ELLE PART DANS DES TRUCS',
  leadText: 'Claire-Marie se raconte, se disperse et s\'égare pour notre plus grand bonheur. Un spectacle qui fait du bien !',
  coverUrl: 'https://cdn.paris.fr/qfap/2020/08/18/72516_VmlzdWVsIHBhcmlzZnIgZWxsZSBwYXJ0IGRhbnMgZGVzIHRydWNzLmpwZw==.jpg',
  tags: 'Ados;En famille;C\'est un peu;A chier;On va pas;Se mentir',
  priceType: 'payant',
  addressCity: 'Paris',
  id: '109066',
}, {
  title: 'ELLE PART DANS DES TRUCS',
  leadText: 'Claire-Marie se raconte, se disperse et s\'égare pour notre plus grand bonheur. Un spectacle qui fait du bien !',
  coverUrl: 'https://cdn.paris.fr/qfap/2020/08/18/72516_VmlzdWVsIHBhcmlzZnIgZWxsZSBwYXJ0IGRhbnMgZGVzIHRydWNzLmpwZw==.jpg',
  tags: 'Ados;En famille',
  priceType: 'payant',
  addressCity: 'Paris',
  id: '109066',
}, {
  title: 'ELLE PART DANS DES TRUCS',
  leadText: 'Claire-Marie se raconte, se disperse et s\'égare pour notre plus grand bonheur. Un spectacle qui fait du bien !',
  coverUrl: 'https://cdn.paris.fr/qfap/2020/08/18/72516_VmlzdWVsIHBhcmlzZnIgZWxsZSBwYXJ0IGRhbnMgZGVzIHRydWNzLmpwZw==.jpg',
  tags: 'Ados;En famille',
  priceType: 'payant',
  addressCity: 'Paris',
  id: '109066',
}, {
  title: 'ELLE PART DANS DES TRUCS',
  leadText: 'Claire-Marie se raconte, se disperse et s\'égare pour notre plus grand bonheur. Un spectacle qui fait du bien !',
  coverUrl: 'https://cdn.paris.fr/qfap/2020/08/18/72516_VmlzdWVsIHBhcmlzZnIgZWxsZSBwYXJ0IGRhbnMgZGVzIHRydWNzLmpwZw==.jpg',
  tags: 'Ados;En famille',
  priceType: 'payant',
  addressCity: 'Paris',
  id: '109066',
}, {
  title: 'ELLE PART DANS DES TRUCS',
  leadText: 'Claire-Marie se raconte, se disperse et s\'égare pour notre plus grand bonheur. Un spectacle qui fait du bien !',
  coverUrl: 'https://cdn.paris.fr/qfap/2020/08/18/72516_VmlzdWVsIHBhcmlzZnIgZWxsZSBwYXJ0IGRhbnMgZGVzIHRydWNzLmpwZw==.jpg',
  tags: 'Ados;En famille',
  priceType: 'payant',
  addressCity: 'Paris',
  id: '109066',
}, {
  title: 'ELLE PART DANS DES TRUCS',
  leadText: 'Claire-Marie se raconte, se disperse et s\'égare pour notre plus grand bonheur. Un spectacle qui fait du bien !',
  coverUrl: 'https://cdn.paris.fr/qfap/2020/08/18/72516_VmlzdWVsIHBhcmlzZnIgZWxsZSBwYXJ0IGRhbnMgZGVzIHRydWNzLmpwZw==.jpg',
  tags: 'Ados;En famille;C\'est un peu;A chier;On va pas;Se mentir',
  priceType: 'payant',
  addressCity: 'Paris',
  id: '109066',
}];

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
          <Button variant="outline-light" href={`/event?id=${id}`} size="md">Voir le détail</Button>
        </Card.Body>
        <Card.Footer>
          <Card.Text><Tags tags={tags} /></Card.Text>
        </Card.Footer>
      </Card>
    </Col>
  );
};

const Events = () => (
  <Row>
    <Col xs="9">
      <h3 className="mt-4">Que faire à Paris ?</h3>
      <Row className="mt-4">
        {events.map((event) => <EventItem data={event} />)}
      </Row>
      <Button className="mb-4" variant="secondary">{'Voir plus d\'événements'}</Button>
    </Col>
    <Col xs="3">
      <Filters />
    </Col>
  </Row>
);

export default Events;
