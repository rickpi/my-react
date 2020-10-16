import React from 'react';
import Trailers from '../trailers';
import Movies from '../movies';

const Main = () => (
  <div>
    <Trailers />
    <hr />
    <Movies category="Action" />
    <Movies category="Aventure" />
  </div>
);

export default Main;
