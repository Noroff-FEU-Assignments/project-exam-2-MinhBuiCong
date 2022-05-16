import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <main className="login-container">
      <h1 className="title">Log in</h1>
      <Form className="form-container">
        <Form.Group className="group-input" controlId="loginEmail">
          <Form.Label className="label">Email</Form.Label>
          <Form.Control defaultValue="John@doe.com" />
        </Form.Group>
        <Form.Group className="group-input" controlId="loginPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="submit-button">Log in</Button>
      </Form>
    </main>
  );
}

export default Login;
