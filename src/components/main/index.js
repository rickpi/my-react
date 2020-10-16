import React from 'react';
import { Col } from 'react-bootstrap';

import Trailers from '../trailers';
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

const Main = ({ inputValue }) => {
  if (inputValue === '') {
    return (
      <Col xs="8">
        <Trailers />
        <hr />
        <Movies
          title="Action"
          movies={movies.filter((item) => item.category === 'Action')}
        />
        <Movies
          title="Aventure"
          movies={movies.filter((item) => item.category === 'Aventure')}
        />
        <Movies
          title="Horreur"
          movies={movies.filter((item) => item.category === 'Horreur')}
        />
        <Movies
          title="Comédie"
          movies={movies.filter((item) => item.category === 'Comédie')}
        />
      </Col>
    );
  }

  const filteredMovies = movies.filter((item) => item.title.toLowerCase()
    .includes(inputValue.toLowerCase()));

  return (
    <Col xs="8">
      <Movies
        title={`Results ${filteredMovies.length}`}
        movies={filteredMovies}
      />
    </Col>
  );
};

export default Main;
