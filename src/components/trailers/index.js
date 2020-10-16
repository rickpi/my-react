import React from 'react';
import { Carousel } from 'react-bootstrap';

const Trailers = () => (
  <div>
    <h4 className="mt-3">Bandes Annonces</h4>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.hitek.fr/img/up_m/362459579/ob3a7b42thehobbit2.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://geeko.lesoir.be/wp-content/uploads/sites/58/2019/04/Avengers-Endgame.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Trailers;
