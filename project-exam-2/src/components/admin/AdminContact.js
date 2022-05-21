import React, { useState, useEffect } from "react";
import { getContact, deleteContact } from "../../constants/api";

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
            <button onClick={() => handleDelete(c.id)}>Delete</button>
            <div className="message-person">
              <h4 className="message-name">{c.attributes.name}</h4>
              <h4 className="message-email">{c.attributes.email}</h4>
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
