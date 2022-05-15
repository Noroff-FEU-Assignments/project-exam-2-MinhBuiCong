import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ConfirmationModal from "../modal/ConfirmationModal";
import useConfirmationModal from "../../hooks/useConfirmationModal";

function Register() {
  const { register, handleSubmit } = useForm();
  const { registerUser } = useContext(AuthContext);
  const [open, openModal, onClose] = useConfirmationModal();

  const history = useNavigate();

  function onSubmit(credentials) {
    console.log("data", credentials);
    registerUser(credentials);
    openModal();
  }

  return (
    <>
      <ConfirmationModal
        message="Registration successful"
        open={open}
        onClose={() => {
          onClose();
          history.push("/login");
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
        <div>
          <label>Username</label>
          <input type="text" name="username" ref={register}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" ref={register}></input>
        </div>
        <div>
          <button ref={register}>Submit</button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span>Login.</span>
          </Link>
        </p>
      </form>
    </>
  );
}

export default Register;
