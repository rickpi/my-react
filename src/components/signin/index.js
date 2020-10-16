import React from 'react';

import {
  Form,
  Button,
} from 'react-bootstrap';

const SignIn = () => (
  <div>
    <h4 className="mt-3">Sign-In</h4>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
);

export default SignIn;
