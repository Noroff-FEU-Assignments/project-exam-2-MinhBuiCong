import React, { useState, useEffect } from "react";
import { getEnquiry, deleteEnquiry } from "../../constants/api";

const fetchEnquiry = async () => {
  const result = await getEnquiry();
  return result;
};

function AdminEnquiry() {
  const [enquiry, setEnquiry] = useState([]);

  const fetchEnquiry = async () => {
    const res = await getEnquiry();

    if (res.data) {
      setEnquiry(res.data);
    }
  };

  useEffect(() => {
    fetchEnquiry();
  }, []);

  const handleDelete = (id) => {
    deleteEnquiry(id, fetchEnquiry);
  };
  return (
    <main className="enquiry-container">
      <h1 className="title">Enquiry Holidaze - Admin</h1>
      <div className="message-container">
        {enquiry.map((c) => (
          <>
            <button onClick={() => handleDelete(c.id)}>Delete</button>
            <div className="message-person">
              <h4 className="message-name">{c.attributes.name}</h4>
              <h4 className="message-email">{c.attributes.email}</h4>
            </div>
            <p className="message-text">{c.attributes.message}</p>
          </>
        ))}
        {enquiry.length === 0 && <p>No message here</p>}
      </div>
    </main>
  );
}
export default AdminEnquiry;