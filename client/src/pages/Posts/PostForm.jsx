import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../utils/mutations";
import "./posts.css";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [createPost] = useMutation(CREATE_POST, {
    onCompleted: () => {
      // After post creation, you can optionally refetch the list of posts to display the latest data
    },
    onError: (error) => {
      console.error("Error creating post:", error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createPost({ variables: { title, content } });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Create a New Post</h2>
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
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
