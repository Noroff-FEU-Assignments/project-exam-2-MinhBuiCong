import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Establishment() {
  return (
    <main className="establishment-container">
      <h1 className="title">
        Establishment Holidaze{" "}
        <span className="admin-establishment">- Admin</span>
      </h1>

      <Form className="form-container">
        <Form.Group className="group-input" controlId="hotelName">
          <Form.Label className="label">Hotel name</Form.Label>
          <Form.Control className="input" type="text" placeholder="Plaza" />
        </Form.Group>
        <Form.Group className="group-input" controlId="streetAddress">
          <Form.Label className="label">Street address</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder="main street"
          />
        </Form.Group>
        <Form.Group className="group-input" controlId="town">
          <Form.Label className="label">Town</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder="Los Angeles"
          />
        </Form.Group>
        <Form.Group className="group-input" controlId="postalCode">
          <Form.Label className="label">Postal Code</Form.Label>
          <Form.Control className="input" type="text" placeholder="0000" />
        </Form.Group>
        <Form.Group className="group-input" controlId="phoneNumber">
          <Form.Label className="label">Hotel Phone number</Form.Label>
          <Form.Control
            className="input"
            type="number"
            placeholder="123 456 78"
          />
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
