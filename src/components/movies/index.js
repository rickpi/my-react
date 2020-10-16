import React from 'react';
import { Row } from 'react-bootstrap';

import Movie from '../movie';

const movies = [{
  title: 'Avatar',
  category: 'Actions',
  image: 'https://lh3.googleusercontent.com/proxy/3FDWyQlBJbXvcIfnVTEjtHC7nhzOoxchEcizW01hN3Ge_OMDvfMpU_Xb4AFL-g0uImT8frEBIljW2DPP1wjzZnTyWojWO7A3o7ZjogU_UtdgxXna237Rr0fDtMkJR_4kr87CeXsP43pz02bJ',
}, {
  title: 'Joker',
  category: 'Thrillers',
  image: 'https://images-na.ssl-images-amazon.com/images/I/71RIznEEyRL._AC_SY679_.jpg',
}, {
  title: 'The Dark Knight',
  category: 'Actions',
  image: 'https://www.aetherium.fr/wpa/wp-content/uploads/2019/08/aetherium-semio-batman-affiche-2.jpg',
}];

const Movies = () => (
  <div>
    <h4 className="mt-3">Movies Availables</h4>
    <Row>
      {movies.map((item) => <Movie data={item} />)}
    </Row>
    <h4 className="mt-3">Actions</h4>
    <Row>
      {movies
        .filter((item) => item.category === 'Actions')
        .map((item) => <Movie data={item} />)}
    </Row>
    <h4 className="mt-3">Thrillers</h4>
    <Row>
      {movies
        .filter((item) => item.category === 'Thrillers')
        .map((item) => <Movie data={item} />)}
    </Row>
  </div>
);

export default Movies;
