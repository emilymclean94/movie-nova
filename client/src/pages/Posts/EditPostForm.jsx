import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { UPDATE_POST } from "../../utils/mutations";
import "./posts.css";

const EditPostForm = (props) => {
  const [editPost, setEditPost] = useState({
    title: props.title,
    postText: props.postText,
  });

  const [updatePost] = useMutation(UPDATE_POST);

  const handleUpdatePost = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setEditPost({
      ...editPost,
      [name]: value,
    });
  };

  const handleFormSubmit = async () => {
    console.log(editPost);
    await updatePost({
      variables: { ...editPost },
    });
  };

  return (
    <>
      <h2 className="update-form">Update Your Information</h2>
      <Form className="card mb-3" onSubmit={handleFormSubmit}>
        <Form.Group>
          <label htmlFor="title-input" className="input-label">
            Update your title:
          </label>
          <input
            className="card-title"
            id="title-input"
            name="title"
            type="text"
            label="Updated your title"
            onChange={handleUpdatePost}
            value={editPost.title}
          />
        </Form.Group>
        <Form.Group>
          <label htmlFor="postText-input" className="input-label">
            Update your text:
          </label>
          <input
            className="card-text"
            id="postText-input"
            name="postText"
            type="text"
            onChange={handleUpdatePost}
            value={editPost.postText}
          />
        </Form.Group>

        <input className="btn btn-dark" type="submit" value="Update" />
      </Form>
    </>
  );
};
export default EditPostForm;
