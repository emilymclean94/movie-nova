import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../../utils/mutations";
import { QUERY_POST } from "../../utils/queries"; // Import the query for updating the cache
import "./posts.css";

const LikePostBtn = ({ postId }) => {
  const [showModal, setShowModal] = useState(false);

  const [likePost] = useMutation(LIKE_POST, {
    onError: (error) => {
      console.error("Error liking post:", error.message);
    },
    update: (cache, { data: { likePost } }) => {
      // Update the cache to reflect the updated like count
      const updatedPost = likePost;
      const { posts } = cache.readQuery({ query: QUERY_POST });
      const updatedPosts = posts.map((p) =>
        p._id === updatedPost._id ? updatedPost : p
      );
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

  const handleLike = () => {
    likePost({
      variables: { _id: postId },
    })
      .then(() => {
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error liking post:", error.message);
      });
  };

  return (
    <div>
      <Button className="btn btn-dark" id="button" onClick={handleModalOpen}>
        Like
      </Button>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have liked this post.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLike}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LikePostBtn;
