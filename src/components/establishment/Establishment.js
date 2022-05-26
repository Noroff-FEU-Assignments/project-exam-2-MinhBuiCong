import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addHotel } from "../../constants/api";

function Establishment() {
  const [selectedFile, setSelectedFile] = useState("");
  const handleOnClick = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      subtitle: event.target.subtitle.value,
      description: event.target.description.value,
    };
    const formData = new FormData();
    formData.append(`files.image`, selectedFile, selectedFile.id);
    formData.append("data", JSON.stringify(data));
    addHotel(formData);
  };

  return (
    <main className="establishment-container">
      <h1 className="title">Establishment Holidaze - Admin</h1>

      <Form className="form-container" onSubmit={handleOnClick}>
        <Form.Group className="group-input" controlId="hotelName">
          <Form.Label className="label">Hotel name</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder="Hanoi Hotel"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group className="group-input" controlId="town">
          <Form.Label className="label">Location</Form.Label>
          <Form.Control
            className="input"
            type="text"
            placeholder="Vietnam"
            name="subtitle"
            required
          />
        </Form.Group>

        <Form.Group className="group-input" controlId="imageUpload">
          <Form.Label className="label">Upload Image</Form.Label>
          <Form.Control
            className="input"
            type="file"
            required
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="group-input" controlId="description">
          <Form.Label className="label">Description</Form.Label>
          <Form.Control
            className="input"
            as="textarea"
            rows={3}
            name="description"
            required
          />
        </Form.Group>
        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </main>
  );
}

export default Establishment;
