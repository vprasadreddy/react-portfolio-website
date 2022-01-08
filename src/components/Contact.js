import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import feedback from "../assests/feedback.png";

function Contact() {
  const [charactersCount, setCharactersCount] = useState(500);

  const handleInputChange = (e) => {
    setCharactersCount(500 - e.target.value.length);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <section id="contact">
        <h3 className="text-center pt-5">Contact Me</h3>
        <div className="contactme-container mt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-auto w-25 contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Name"
                      {...register("name", { required: true })}
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
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      {...register("email", { required: true })}
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
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
