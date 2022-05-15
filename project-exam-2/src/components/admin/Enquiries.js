import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [establishments, setEstablishments] = useState([]);
  useEffect(() => {
    const fetchEstablishments = async () => {
      const url = BASE_URL + "establishments";
      const data = await (await fetch(url, { headers })).json();
      setEstablishments(data);
    };
    const fetchEnquiries = async () => {
      const url = BASE_URL + "enquiries";
      const data = await (await fetch(url, { headers })).json();
      setEnquiries(data);
    };
    fetchEnquiries();
    fetchEstablishments();
  }, []);

  const deleteEnquiry = async (id) => {
    const url = BASE_URL + `enquiries/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers,
    });
    const updatedEnquiries = enquiries.filter(({ id: eId }) => eId !== id);
    setEnquiries(updatedEnquiries);
  };

  const getEstablishment = (id) =>
    establishments.find(({ id: eId }) => eId === id)?.name || id;

  return (
    <div>
      <h1>Enquiries</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Establishment</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(
              ({ id, name, email, establishmentId, checkIn, checkOut }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  {establishmentId !== getEstablishment(establishmentId) ? (
                    <Link to={`/hotels/${id}`}>
                      <td>{getEstablishment(establishmentId)}</td>
                    </Link>
                  ) : (
                    <td>{getEstablishment(establishmentId)}</td>
                  )}
                  <td>{new Date(checkIn).toLocaleDateString()}</td>
                  <td>{new Date(checkOut).toLocaleDateString()}</td>
                  <td>
                    <button className="" onClick={() => deleteEnquiry(id)}>
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Enquiries;
