import React from 'react';

import { Image } from 'react-bootstrap';

import SignIn from '../signin';

const Sidebar = () => (
  <div>
    <SignIn />
    <hr />
    <Image className="mb-4" src="https://infiniteingenuity.files.wordpress.com/2015/03/skyscraper.jpg" fluid />
  </div>
);

export default Sidebar;
