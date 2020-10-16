import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const App = () => (
  <div>
    <Navigation />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
