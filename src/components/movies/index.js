import React from 'react';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';

const movies = [{
  title: 'Avatar',
  category: 'Aventure',
  image: 'https://lh3.googleusercontent.com/proxy/3FDWyQlBJbXvcIfnVTEjtHC7nhzOoxchEcizW01hN3Ge_OMDvfMpU_Xb4AFL-g0uImT8frEBIljW2DPP1wjzZnTyWojWO7A3o7ZjogU_UtdgxXna237Rr0fDtMkJR_4kr87CeXsP43pz02bJ',
}, {
  title: 'Joker',
  category: 'Action',
  image: 'https://images-na.ssl-images-amazon.com/images/I/71RIznEEyRL._AC_SY679_.jpg',
}, {
  title: 'The Dark Knight',
  category: 'Action',
  image: 'https://www.aetherium.fr/wpa/wp-content/uploads/2019/08/aetherium-semio-batman-affiche-2.jpg',
}];

const Item = ({ data }) => {
  const { title, image } = data;

  return (
    <Col xs="3">
      <Card>
        <Card.Img src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Show</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Movies = ({ category }) => (
  <div>
    <h4 className="mt-3">{category}</h4>
    <Row>
      {movies
        .filter((item) => item.category === category)
        .map((item) => <Item data={item} />)}
    </Row>
  </div>
);

export default Movies;
