import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useConfirmationModal from "../../hooks/useConfirmationModal";
import ConfirmationModal from "../modal/ConfirmationModal";

function Login() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [open, openModal, onClose] = useConfirmationModal();
  const history = useNavigate();

  function onSubmit(credentials) {
    if (login(credentials)) {
      openModal();
    }
    console.log("data", credentials);
  }

  return (
    <>
      <ConfirmationModal
        message="Login successful"
        open={open}
        onClose={() => {
          onClose();
          history.push("/admin");
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>
        <div>
          <label>Username</label>
          <input type="text" name="username" ref={register}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" ref={register}></input>
        </div>
        <div>
          <button ref={register}>Login</button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Login;
