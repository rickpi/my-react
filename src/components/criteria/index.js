import React, { Component } from 'react';
import {
  Col,
  Form,
  Button,
} from 'react-bootstrap';

import categoriesList from '../../constants/categoriesList';

class Criteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pmr: false,
      blind: false,
      deaf: false,
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleChange(target) {
    const { id, checked } = target;

    this.setState({
      [id]: checked,
    });
  }

  handleCategoryChange(category) {
    if (categoriesList.indexOf(category) === -1) {
      return this.setState({
        category: '',
      });
    }
    return this.setState({
      category,
    });
  }

  render() {
    const {
      pmr,
      blind,
      deaf,
      category,
    } = this.state;
    const selected = category === '' ? 'noCategory' : category;

    console.log(this.state);

    return (
      <Col xs="3">
        <h4 className="mt-4">Critères de recherche</h4>
        <Form className="mt-4">
          <Form.Group controlId="category">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              as="select"
              defaultValue={selected}
              onChange={(event) => {
                this.handleCategoryChange(event.target.value);
              }}
            >
              <option value="noCategory">-- Pas de catégorie --</option>
              {categoriesList.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="pmr">
            <Form.Check
              type="checkbox"
              label="Accès PMR"
              checked={pmr}
              onChange={(event) => {
                const { target } = event;
                this.handleChange(target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="blind">
            <Form.Check
              type="checkbox"
              label="Accès mal voyant"
              checked={blind}
              onChange={(event) => {
                const { target } = event;
                this.handleChange(target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="deaf">
            <Form.Check
              type="checkbox"
              label="Accès mal entendant"
              checked={deaf}
              onChange={(event) => {
                const { target } = event;
                this.handleChange(target);
              }}
            />
          </Form.Group>
          <Button variant="secondary" type="button">
            Lancer la recherche avec ces critères
          </Button>
        </Form>
      </Col>
    );
  }
}

export default Criteria;
