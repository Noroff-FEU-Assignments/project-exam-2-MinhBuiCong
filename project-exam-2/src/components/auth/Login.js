import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DoLogin from "./DoLogin";
import { getUsername } from "./storage";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (await DoLogin(username, password)) {
      window.location.reload();
    } else {
      setLoginError(true);
    }
  }

  return (
    <main className="login-container">
      <h1 className="title">Log in</h1>
      <Form onSubmit={handleSubmit} className="form-container">
        {getUsername() ? (
          <Link className="dashboard-button" to="/admin">
            Go to Dashboard
          </Link>
        ) : (
          <>
            {loginError ? (
              <p style={{ color: "red" }}>Wrong username or password</p>
            ) : (
              <></>
            )}
            <Form.Group className="group-input" controlId="loginEmail">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control
                onChange={(e) => setUsername(e.target.value)}
                className="input"
                placeholder="John@doe.com"
              />
            </Form.Group>
            <Form.Group className="group-input" controlId="loginPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit" className="submit-button">
              Log in
            </Button>
          </>
        )}
      </Form>
    </main>
  );
}

export default Login;
