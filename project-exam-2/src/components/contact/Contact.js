import React from "react";
import Form from "react-bootstrap/Form";

function ContactPage() {
  return (
    <main className="contact-container">
      <Form className="form-container">
        <div className="form-row">
          <Form.Group className="mb-3" controlId="first-name">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="John" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="last-name">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Doe" />
          </Form.Group>
        </div>
        <div className="form-row">
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="John@doe.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone-number">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="number" placeholder="123 456 78" />
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </main>
  );
}

export default ContactPage;
