import React from 'react';
import { Carousel } from 'react-bootstrap';

const Trailers = () => (
  <div>
    <h4 className="mt-3">Bandes Annonces</h4>
    <Carousel>
      <Carousel.Item>
        <iframe title="Le Hobbit" height="400px" className="w-100" src="https://www.youtube.com/embed/tiy7peMH3g8" />
        <Carousel.Caption>
          <h3>Le Hobbit</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <iframe title="Avenger : Endgame" height="400px" className="w-100" src="https://www.youtube.com/embed/wV-Q0o2OQjQ" />
        <Carousel.Caption>
          <h3>Avenger : Endgame</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Trailers;