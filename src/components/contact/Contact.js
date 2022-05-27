import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postContact } from "../../constants/api";

function ContactPage() {
  const [submitted, setsubmitted] = useState(false);
  const handleOnClick = (event) => {
    event.preventDefault();
    postContact({
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      },
    })
      .then()
      .catch((e) => console.error(e));
    setsubmitted(true);
  };

  return (
    <main className="contact-container">
      <h1 className="title">Contact Holidaze</h1>
      <Form className="form-container" onSubmit={handleOnClick}>
        {!submitted ? (
          <>
            <div className="form-row">
              <Form.Group className="group-input" controlId="name">
                <Form.Label className="label">Full name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="John"
                  name="name"
                  required
                />
              </Form.Group>
            </div>
            <div className="form-row">
              <Form.Group className="group-input" controlId="email">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="John@doe.com"
                  name="email"
                  required
                />
              </Form.Group>
            </div>
            <Form.Group className="group-input" controlId="message">
              <Form.Label className="label">Message</Form.Label>
              <Form.Control
                className="input"
                as="textarea"
                name="message"
                rows={3}
                required
              />
            </Form.Group>
            <Button type="submit" className="submit-button">
              Submit
            </Button>
          </>
        ) : (
          <div className="form-submit-container">
            <h2 className="form-submit-title">Form is submitted</h2>
            <Link className="link-submit" to="/">
              <Button className="home-page-button">Homepage</Button>
            </Link>
          </div>
        )}
      </Form>
    </main>
  );
}

export default ContactPage;
