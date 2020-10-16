import React from 'react';

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = () => (
  <Row>
    <Col>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MyMovies</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Action</Nav.Link>
            <Nav.Link href="#features">Aventure</Nav.Link>
            <Nav.Link href="#pricing">Horreur</Nav.Link>
            <Nav.Link href="#pricing">Comédie</Nav.Link>
            <Nav.Link href="#pricing">Sign-in</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </Col>
  </Row>
);

export default Navigation;
