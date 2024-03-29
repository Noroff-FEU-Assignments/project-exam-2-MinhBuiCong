import React, { useState, useEffect } from "react";
import { getContact, deleteContact } from "../../constants/api";
import Button from "react-bootstrap/Button";

const fetchContact = async () => {
  const result = await getContact();
  return result;
};

function AdminContact() {
  const [contact, setContact] = useState([]);
  const fetchContact = async () => {
    const res = await getContact();

    if (res.data) {
      setContact(res.data);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const handleDelete = (id) => {
    deleteContact(id, fetchContact);
  };

  return (
    <main className="contact-container">
      <h1 className="title">Contact Holidaze - Admin</h1>
      <div className="message-container">
        {contact.map((c) => (
          <>
            <div className="message-person">
              <div className="title-container">
                <h4 className="message-name">Name: {c.attributes.name}</h4>
                <h4 className="message-email">Email: {c.attributes.email}</h4>
              </div>
              <Button
                className="delete-button"
                variant="danger"
                onClick={() => handleDelete(c.id)}
              >
                Delete
              </Button>
            </div>
            <p className="message-text">{c.attributes.message}</p>
          </>
        ))}
        {contact.length === 0 && <p>No message here</p>}
      </div>
    </main>
  );
}

export default AdminContact;
