import React, { Component } from 'react';
import { Globe2 } from 'react-bootstrap-icons';
import {
  Navbar,
  Nav,
  Form,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.inputValue,
    };
  }

  render() {
    const { inputValue } = this.state;

    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Nav.Link href="/">
            <Globe2 className="mr-2" />
            {'{ ReactApp }'}
          </Nav.Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Evénement</Nav.Link>
          <Nav.Link href="/about">A propos</Nav.Link>
        </Nav>
        <Form inline>
          <InputGroup size="sm">
            <FormControl type="text" placeholder="Rechercher un événement..." className="mr-sm-2" value={inputValue} />
            <InputGroup.Append>
              <Button variant="outline-secondary">Lancer la recherche</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Navbar>
    );
  }
}

export default Navigation;
