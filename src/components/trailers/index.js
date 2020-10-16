import React from 'react';
import { Carousel } from 'react-bootstrap';

const Trailers = () => (
  <div>
    <h4 className="mt-3">Bandes Annonces</h4>
    <Carousel>
      <Carousel.Item>
        <iframe title="firstSlide" height="400px" className="w-100" src="https://www.youtube.com/embed/tiy7peMH3g8" />
      </Carousel.Item>
      <Carousel.Item>
        <iframe title="secondSlide" height="400px" className="w-100" src="https://www.youtube.com/embed/wV-Q0o2OQjQ" />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Trailers;
