import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getUsername } from "../auth/storage";

function ContactPage() {
  const loggedIn = () => {
    return <main className="contact-container"></main>;
  };

  return (
    <main className="contact-container">
      {getUsername() ? (
        <>
          <h1 className="title">Contact Holidaze - Admin</h1>
          <div className="message-container">
            <div className="message-person">
              <h4 className="message-name">Persons name</h4>
              <p className="message-text">Here is som random text</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="title">Contact Holidaze</h1>
          <Form className="form-container">
            <div className="form-row">
              <Form.Group className="group-input" controlId="first-name">
                <Form.Label className="label">First name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="John"
                />
              </Form.Group>
              <Form.Group className="group-input" controlId="last-name">
                <Form.Label className="label">Last name</Form.Label>
                <Form.Control className="input" type="text" placeholder="Doe" />
              </Form.Group>
            </div>
            <div className="form-row">
              <Form.Group className="group-input" controlId="email">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                  className="input"
                  type="email"
                  placeholder="John@doe.com"
                />
              </Form.Group>
              <Form.Group className="group-input" controlId="phone-number">
                <Form.Label className="label">Phone number</Form.Label>
                <Form.Control
                  className="input"
                  type="number"
                  placeholder="123 456 78"
                />
              </Form.Group>
            </div>
            <Form.Group className="group-input" controlId="message">
              <Form.Label className="label">Message</Form.Label>
              <Form.Control className="input" as="textarea" rows={3} />
            </Form.Group>
            <Button className="submit-button">Submit</Button>
          </Form>
        </>
      )}
    </main>
  );
}

export default ContactPage;
