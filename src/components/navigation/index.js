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
import './navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.inputValue,
    };
    this.handleChange = this.handleChange.bind(this);
    this.emptyInput = this.emptyInput.bind(this);
  }

  handleChange(typed) {
    let { inputValue } = this.state;
    inputValue = typed;
    this.setState({
      inputValue,
    });
  }

  emptyInput() {
    const { updateInputValue } = this.props;

    updateInputValue('');
    this.setState({
      inputValue: '',
    });
  }

  render() {
    const { inputValue } = this.state;
    const { updateInputValue } = this.props;
    let emptyButton = null;

    if (inputValue !== '') {
      emptyButton = (
        <button type="button" onClick={this.emptyInput} className="empty-input-button">
          X
        </button>
      );
    }

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
          <Nav.Link href="/advanced">Recherche avancée</Nav.Link>
          <Nav.Link href="/about">A propos</Nav.Link>
        </Nav>
        <Form inline onSubmit={(e) => { e.preventDefault(); }}>
          <InputGroup size="sm">
            {emptyButton}
            <FormControl
              type="text"
              placeholder="Rechercher un événement..."
              className="mr-sm-2"
              value={inputValue}
              onChange={(event) => {
                this.handleChange(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter') updateInputValue(inputValue);
              }}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => updateInputValue(inputValue)}
              >
                Lancer la recherche
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Navbar>
    );
  }
}

export default Navigation;
