import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const authenticateUser = async (name, password) => {
    await axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: name,
        password: password,
      })
      .then((res) => {
        console.log(`${res.data.user.username} logged in`);
        setAuthenticated(true);
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      });
  };

  const handleSubmit = (event) => {
    //Prevent page reload

    event.preventDefault();
    authenticateUser(event.target.name.value, event.target.password.value);
  };

  // JSX code for login form
  const renderForm = (
    <main>
      {error ? <p>wrong password or username</p> : <></>}
      <form onSubmit={handleSubmit}>
        <span className="username span">Username</span>
        <input type="text" name="name" required />
        <span className="password span">Password</span>
        <input type="password" name="password" required />
        <input className="buttonLogin" type="submit" />
      </form>
    </main>
  );

  return (
    <main className="app">
      <div className="login-form">
        <h1 className="title">Login</h1>
        {authenticated ? <Navigate to="/admin" /> : renderForm}
      </div>
    </main>
  );
}
export default Login;
