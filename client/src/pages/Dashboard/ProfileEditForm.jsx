import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";
import "./dashboard.css";

const EditForm = (props) => {
  const [editUser, setEditUser] = useState({
    name: props.name,
    username: props.username,
    genre: props.genre,
    bio: props.bio,
  });

  const [updateUser] = useMutation(UPDATE_USER);

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    console.log(editUser);

    try {
      const { data } = await updateUser({
        variables: { ...editUser },
      });

      const token = data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h2 className="update-form">Update Your Information</h2>
      <Form className="update-form-container" onSubmit={handleFormSubmit}>
        <Form.Group>
          <label htmlFor="name-input" className="input-label">
            Update your name:
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            label="Updated your name"
            onChange={handleUpdateUser}
            value={editUser.name}
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="username-input" className="input-label">
            Update your username:
          </label>
          <input
            id="username-input"
            name="username"
            type="text"
            placeholder={props.username}
            onChange={handleUpdateUser}
            value={editUser.username}
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="genre-input" className="input-label">
            Update your favorite genre:
          </label>
          <input
            id="genre-input"
            name="genre"
            type="text"
            placeholder="Update Genre"
            onChange={handleUpdateUser}
            value={editUser.genre}
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="bio-input" className="input-label">
            Update your bio:
          </label>
          <input
            id="bio-input"
            name="bio"
            type="text"
            placeholder="Update Bio"
            onChange={handleUpdateUser}
            value={editUser.bio}
          />
        </Form.Group>
        <input className="btn btn-dark" type="submit" value="Update" />
      </Form>
    </>
  );
};
export default EditForm;
