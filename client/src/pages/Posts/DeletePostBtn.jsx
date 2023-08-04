import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { REMOVE_POST } from "../../utils/mutations";
import { QUERY_POST } from "../../utils/queries";
import "./posts.css";

const DeletePostBtn = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);

  const [deletePost] = useMutation(REMOVE_POST, {
    onError: (error) => {
      console.error("Error deleting post:", error.message);
    },
    update: (cache, { data: { removePost } }) => {
      // Update the cache to remove the deleted post
      const updatedPost = removePost;
      const { posts } = cache.readQuery({ query: QUERY_POST });
      const updatedPosts = posts.filter((post) => post._id !== updatedPost._id);

      cache.writeQuery({
        query: QUERY_POST,
        data: { posts: updatedPosts },
      });
    },
  });

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    deletePost({
      variables: { _id: postId },
    })
      .then(() => {
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error deleting post:", error.message);
      });
  };

  return (
    <div>
      <Button className="btn btn-dark" id="button" onClick={handleModalOpen}>
        Delete Post
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeletePostBtn;
