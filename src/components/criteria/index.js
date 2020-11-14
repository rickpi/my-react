import React, { Component } from 'react';
import {
  Col,
  Form,
  Button,
  Row,
} from 'react-bootstrap';

import categoriesList from '../../constants/categoriesList';

class Criteria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pmr: false,
      blind: false,
      deaf: false,
      free: false,
      category: '',
      date: '',
      rows: 10,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.emptyDate = this.emptyDate.bind(this);
    this.handleRowsChange = this.handleRowsChange.bind(this);
  }

  handleCheckboxChange(target) {
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

  handleDateChange(date) {
    this.setState({
      date,
    });
  }

  emptyDate() {
    this.setState({
      date: '',
    });
  }

  handleRowsChange(rows) {
    this.setState({
      rows,
    });
  }

  render() {
    const {
      pmr,
      blind,
      deaf,
      free,
      category,
      date,
      rows,
    } = this.state;
    const { search } = this.props;
    const selected = category === '' ? 'noCategory' : category;
    let emptyDateButton = null;

    if (date !== '') {
      emptyDateButton = (
        <Button
          variant="secondary"
          type="button"
          onClick={this.emptyDate}
        >
          X
        </Button>
      );
    }

    return (
      <Col xs="3">
        <h4 className="mt-4">Critères de recherche</h4>
        <Form className="mt-4">
          <Form.Group as={Row} controlId="date">
            <Col xs="12">
              <Form.Label>Date</Form.Label>
            </Col>
            <Col xs="10">
              <Form.Control
                type="date"
                value={date}
                onChange={(event) => this.handleDateChange(event.target.value)}
              />
            </Col>
            <Col xs="2">
              {emptyDateButton}
            </Col>
          </Form.Group>
          <Form.Group controlId="category">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              as="select"
              defaultValue={selected}
              onChange={(event) => this.handleCategoryChange(event.target.value)}
            >
              <option value="noCategory">-- Pas de catégorie --</option>
              {categoriesList.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="free">
            <Form.Check
              type="checkbox"
              label="Gratuit"
              checked={free}
              onChange={(event) => {
                this.handleCheckboxChange(event.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="pmr">
            <Form.Check
              type="checkbox"
              label="Accès PMR"
              checked={pmr}
              onChange={(event) => {
                this.handleCheckboxChange(event.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="blind">
            <Form.Check
              type="checkbox"
              label="Accès mal voyant"
              checked={blind}
              onChange={(event) => {
                this.handleCheckboxChange(event.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="deaf">
            <Form.Check
              type="checkbox"
              label="Accès mal entendant"
              checked={deaf}
              onChange={(event) => {
                this.handleCheckboxChange(event.target);
              }}
            />
          </Form.Group>
          <Form.Group controlId="rows">
            <Form.Label>Nombre de résultats</Form.Label>
            <Form.Control
              type="number"
              value={rows}
              onChange={(event) => {
                this.handleRowsChange(event.target.value);
              }}
            />
          </Form.Group>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              search(this.state);
            }}
          >
            Lancer la recherche avec ces critères
          </Button>
        </Form>
      </Col>
    );
  }
}

export default Criteria;
