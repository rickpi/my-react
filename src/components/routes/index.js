import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Main from '../main';
import Sidebar from '../sidebar';
import Movies from '../movies';

const movies = [{
  title: 'Antebellum',
  category: 'Horreur',
  image: 'https://fr.web.img3.acsta.net/c_222_296/pictures/20/08/05/09/21/0019416.jpg',
}, {
  title: 'Tenet',
  category: 'Action',
  image: 'https://fr.web.img6.acsta.net/c_222_296/pictures/20/08/03/12/15/2118693.jpg',
}, {
  title: 'Tenet',
  category: 'Action',
  image: 'https://fr.web.img6.acsta.net/c_222_296/pictures/20/08/03/12/15/2118693.jpg',
}, {
  title: 'Tenet',
  category: 'Action',
  image: 'https://fr.web.img6.acsta.net/c_222_296/pictures/20/08/03/12/15/2118693.jpg',
}, {
  title: 'Les Blagues de Toto',
  category: 'Comédie',
  image: 'https://fr.web.img5.acsta.net/c_222_296/pictures/20/06/08/12/13/4494723.jpg',
}, {
  title: 'Les Blagues de Toto',
  category: 'Comédie',
  image: 'https://fr.web.img5.acsta.net/c_222_296/pictures/20/06/08/12/13/4494723.jpg',
}, {
  title: 'Bigfoot Family',
  category: 'Aventure',
  image: 'https://fr.web.img4.acsta.net/c_222_296/pictures/20/06/23/11/55/2307228.jpg',
}, {
  title: 'Bigfoot Family',
  category: 'Aventure',
  image: 'https://fr.web.img4.acsta.net/c_222_296/pictures/20/06/23/11/55/2307228.jpg',
}, {
  title: 'Bigfoot Family',
  category: 'Aventure',
  image: 'https://fr.web.img4.acsta.net/c_222_296/pictures/20/06/23/11/55/2307228.jpg',
}, {
  title: 'Bigfoot Family',
  category: 'Aventure',
  image: 'https://fr.web.img4.acsta.net/c_222_296/pictures/20/06/23/11/55/2307228.jpg',
}];

const Routes = ({ inputValue }) => (
  <Container>
    <Row>
      <Switch>
        <Route exact path="/app">
          <Main inputValue={inputValue} />
        </Route>
        <Route exact path="/movies/action">
          <Col xs="8">
            <Movies
              title="Action"
              movies={movies.filter((item) => item.category === 'Action')}
            />
          </Col>
        </Route>
        <Route exact path="/movies/aventure">
          <Col xs="8">
            <Movies
              title="Aventure"
              movies={movies.filter((item) => item.category === 'Aventure')}
            />
          </Col>
        </Route>
        <Route exact path="/movies/horreur">
          <Col xs="8">
            <Movies
              title="Horreur"
              movies={movies.filter((item) => item.category === 'Horreur')}
            />
          </Col>
        </Route>
        <Route exact path="/movies/comedie">
          <Col xs="8">
            <Movies
              title="Comédie"
              movies={movies.filter((item) => item.category === 'Comédie')}
            />
          </Col>
        </Route>
      </Switch>
      <Col xs="3">
        <Sidebar />
      </Col>
    </Row>
  </Container>
);

export default Routes;
