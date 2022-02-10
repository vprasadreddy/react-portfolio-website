import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import feedback from "../assests/feedback.png";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const [charactersCount, setCharactersCount] = useState(500);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  let { name, email, comments } = contactFormData;

  const handleInputChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
    if (e.target.name == "comments") {
      setCharactersCount(500 - e.target.value.length);
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    //console.log(data, e);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          //console.log(result.text);
          Swal.fire(
            "Email sent successfully!",
            "Thank you for your message. I'll get back to you shortly.",
            "success"
          );
          setContactFormData({
            name: "",
            email: "",
            comments: "",
          });
        },
        (error) => {
          //console.log(error.text);
          Swal.fire(
            "Sorry",
            "Something went wrong. Please try again.",
            "error"
          );
        }
      );
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <React.Fragment>
      <section id="contact">
        <h3 className="text-center pt-5">Contact Me</h3>
        <div className="contactme-container mt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <form
                onSubmit={handleSubmit(onSubmit, onError)}
                autoComplete="off"
              >
                <div className="m-auto w-25 contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="Enter Name"
                      {...register("name", { required: true })}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <span className="form-text small text-danger">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      {...register("email", { required: true })}
                      onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      I'll never share your email with anyone else.
                    </small>
                    {errors.email && (
                      <span className="form-text small text-danger">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Comments</label>
                    <textarea
                      className="form-control"
                      id="comments"
                      name="comments"
                      value={comments}
                      placeholder="Enter comments"
                      {...register("comments", { required: true })}
                      maxLength="500"
                      onChange={handleInputChange}
                    />
                    <small
                      id="comments-characters-left"
                      className="form-text text-muted"
                    >
                      {charactersCount} characters left
                    </small>
                    {errors.comments && (
                      <span className="form-text small text-danger">
                        Comments are required
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact;
