import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });

        // update me object's cache, appending new post to the end of the array
        cache.writeQuery({
          data: {
            me: {
              ...cache.readQuery({ query: QUERY_ME }).me,
              posts: [
                ...cache.readQuery({ query: QUERY_ME }).me.posts,
                addPost,
              ],
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          title,
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      if (data) {
        setTitle("");
        setPostText("");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title" && value.length <= 50) {
      setTitle(value);
    }
    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <Col className="postform-content">
      <h2 className="postform-title">Create a New Post</h2>
      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>

          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <textarea
                name="title"
                value={title}
                onChange={handleChange}
                className="form-control"
                placeholder="Title"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="postText" className="form-label">
                Add Post
              </label>
              <textarea
                name="postText"
                value={postText}
                onChange={handleChange}
                className="form-control"
                placeholder="Add Post"
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn btn-primary">
                Create Post
              </button>
            </div>
            {error && (
              <div className="bg-danger text-white p-3">{error.message}</div>
            )}
          </form>
        </>
      ) : (
        <p>You need to be logged in to share your thoughts.</p>
      )}
    </Col>
  );
};

export default PostForm;
