import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import "./posts.css";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const [createPost] = useMutation(ADD_POST, {
    onCompleted: () => {
      alert("Post created!");
    },
    onError: (error) => {
      console.error("Error creating post:", error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({ variables: { title, postText } });
    setTitle("");
    setPostText("");
  };

  return (
    <Col className="postform-content">
      <h2 className="postform-title">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postText" className="form-label">
            postText
          </label>
          <textarea
            id="postText"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </Col>
  );
};

export default PostForm;
