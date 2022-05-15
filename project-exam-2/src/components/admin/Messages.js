import React, { useEffect, useState } from "react";
import { BASE_URL, headers } from "../../constants/api";

function Messages() {
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

  return (
    <div>
      <h1>Messages</h1>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <div>
              <p>{message.name}</p>
            </div>
            <div>
              <p>"{message.message}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
