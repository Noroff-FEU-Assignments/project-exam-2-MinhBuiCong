import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postEnquiry } from "../../constants/api";

function EnquiryPage() {
  const handleOnClick = (event) => {
    event.preventDefault();
    postEnquiry({
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      },
    })
      .then()
      .catch((e) => console.error(e));
    window.location.reload();
  };

  return (
    <main className="enquiry-container">
      <h1 className="title">Enquiry page</h1>
      <Form className="form-container" onSubmit={handleOnClick}>
        <div className="form-row">
          <Form.Group className="group-input" controlId="first-name">
            <Form.Label className="label">Full name</Form.Label>
            <Form.Control
              className="input"
              type="text"
              placeholder="John"
              required
              name="name"
            />
          </Form.Group>
        </div>
        <div className="form-row">
          <Form.Group className="group-input" controlId="email">
            <Form.Label className="label">Email address</Form.Label>
            <Form.Control
              className="input"
              type="email"
              placeholder="John@doe.com"
              required
              name="email"
            />
          </Form.Group>
        </div>
        <Form.Group className="group-input" controlId="message">
          <Form.Label className="label">Message</Form.Label>
          <Form.Control
            className="input"
            as="textarea"
            rows={3}
            required
            name="message"
          />
        </Form.Group>
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </main>
  );
}

export default EnquiryPage;
