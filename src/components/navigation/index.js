import React from 'react';
import { Globe2 } from 'react-bootstrap-icons';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
      <Nav.Link href="/">
        <Globe2 className="mr-2" />
        {'{ ReactApp }'}
      </Nav.Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Application</Nav.Link>
      <Nav.Link href="/about">A propos</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Rechercher un événement..." className="mr-sm-2" />
      <Button variant="outline-info">
        Lancer la recherche
      </Button>
    </Form>
  </Navbar>
);

export default Navigation;
