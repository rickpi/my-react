import React from 'react';
import { Film } from 'react-bootstrap-icons';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Navigation = class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    const { handleSearch } = this.props;

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Nav.Link href="/app">
              <Film className="mr-2" />
              MyMovies
            </Nav.Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/movies/action">Action</Nav.Link>
            <Nav.Link href="/movies/aventure">Aventure</Nav.Link>
            <Nav.Link href="/movies/horreur">Horreur</Nav.Link>
            <Nav.Link href="/movies/comedie">Comédie</Nav.Link>
            <Nav.Link href="#pricing">Sign-in</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={inputValue}
              onChange={this.handleChange}
            />
            <Button
              variant="outline-info"
              onClick={() => {
                handleSearch(inputValue);
              }}
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
};

export default Navigation;
