import React from "react";
import { Row, Button, Form, Card } from "react-bootstrap";
import { useState } from "react";

const Admin = () => {
  const [formData, setFromData] = useState({});
  const changeHandaler = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Row>
      <Card
        className="mx-auto"
        style={{
          width: "35rem",
          margin: "2em",
          padding: "10px",
        }}
      >
        <Form onSubmit={submitData}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={changeHandaler}
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={changeHandaler}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Row>
  );
};

export default Admin;
