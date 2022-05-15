import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const url = BASE_URL + "contacts";
      const data = await (await fetch(url, { headers })).json();
      console.log("data", data);
      setMessages(data);
    };
    fetchMessages();
  }, []);
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>
        Welcome <span>{user.username}!</span>
      </h1>
      <Link to="/admin/messages">
        <p>
          You have <span>{messages.length} messages.</span>
        </p>
      </Link>
      <h2>Actions</h2>
      <Link to="/admin/hotels">
        <button>View establishments</button>
      </Link>
      <Link to="/admin/hotels/add">
        <button>Create new establishment</button>
      </Link>
      <Link to="/admin/enquiries">
        <button>See enquiries</button>
      </Link>
    </div>
  );
}

export default Dashboard;
