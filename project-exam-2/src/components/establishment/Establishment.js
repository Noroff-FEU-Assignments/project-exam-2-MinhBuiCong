import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Establishment() {
  return (
    <main className="establishment-container">
      <h1 className="title">Establishment Holidaze - Admin</h1>

      <Form className="form-container">
        <Form.Group className="group-input" controlId="hotelName">
          <Form.Label className="label">Hotel name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder="Hanoi Hotel"
          />
        </Form.Group>
        <Form.Group className="group-input" controlId="town">
          <Form.Label className="label">Location</Form.Label>
          <Form.Control className="input" type="text" placeholder="Vietnam" />
        </Form.Group>

        <Form.Group className="group-input" controlId="imageUpload">
          <Form.Label className="label">Upload Image</Form.Label>
          <Form.Control className="input" type="file" />
        </Form.Group>
        <Form.Group className="group-input" controlId="description">
          <Form.Label className="label">Description</Form.Label>
          <Form.Control className="input" as="textarea" rows={3} />
        </Form.Group>
        <Button className="submit-button">Submit</Button>
      </Form>
    </main>
  );
}

export default Establishment;
