import React from "react";
import "../../sass/style.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .min(3, "First name must be at least 3 characters"),
  lastName: yup
    .string()
    .required("Please enter your last name")
    .min(4, "Last name must be at least 4 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email"),
  subject: yup.string().required(),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Message must be at least 10 characters"),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    window.location.replace("/");
  }

  console.log(errors);

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact form</h1>
        <span className="first-name span">First Name</span>
        <input {...register("firstName")} type="text" placeholder="John" />
        {errors.firstName && (
          <span className="errors">{errors.firstName.message}</span>
        )}
        <span className="last-name span">Last name</span>
        <input {...register("lastName")} type="text" placeholder="Doe" />
        {errors.lastName && (
          <span className="errors">{errors.lastName.message}</span>
        )}

        <span className="email span">E-mail</span>
        <input {...register("email")} type="email" placeholder="John@doe.com" />
        {errors.email && <span className="errors">{errors.email.message}</span>}

        <span className="subject span">Subject</span>
        <select {...register("subject")}>
          <option value="1">Help</option>
          <option value="2">Other</option>
        </select>
        {errors.subject && (
          <span className="errors">{errors.subject.message}</span>
        )}

        <span className="message span">Message</span>
        <textarea
          {...register("message")}
          placeholder="Write your message here"
          rows="4"
          cols="50"
        ></textarea>
        {errors.message && (
          <span className="errors">{errors.message.message}</span>
        )}

        <button>Send</button>
      </form>
    </main>
  );
}

export default Contact;
