import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    genre: "",
    bio: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    window.location.assign("/dashboard");
  };
  return (
    <div className="signup rounded">
      <h1>Signup</h1>
      <form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-2">
          <label className="mb-1" htmlFor="nameInput">
            Name
          </label>
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="nameInput"
            aria-describedby="name"
            placeholder="Jane Doe"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="mb-1" htmlFor="emailInput">
            Email address
          </label>
          <input
            value={formState.email}
            type="email"
            onChange={handleChange}
            name="email"
            className="form-control"
            id="emailInput"
            aria-describedby="email"
            placeholder="janeDoe86@mail.com"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="mb-1" htmlFor="usernameInput">
            Username
          </label>
          <input
            value={formState.username}
            onChange={handleChange}
            name="username"
            type="text"
            className="form-control"
            id="usernameInput"
            aria-describedby="name"
            placeholder="janedoe86"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="mb-1" htmlFor="passwordInput">
            Password
          </label>
          <input
            value={formState.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="form-control"
            id="passwordInput"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <label className="mb-1" htmlFor="genreInput">
            Favorite Genre
          </label>
          <input
            value={formState.genre}
            onChange={handleChange}
            name="genre"
            type="text"
            className="form-control"
            id="genreInput"
            placeholder="Horror"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <label className="mb-1" htmlFor="bioInput">
            Bio
          </label>
          <input
            value={formState.bio}
            onChange={handleChange}
            name="bio"
            type="text"
            className="form-control"
            id="bioInput"
            placeholder="Tell us about yourself!"
          />
        </Form.Group>
        <button type="submit" className="btn btn-dark mb-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
