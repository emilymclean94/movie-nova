import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditPostForm from "./EditPostForm";
import "./posts.css";

const UpdatePostBtn = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button className="btn btn-dark" id="button" onClick={handleModalOpen}>
        Update Post
      </Button>
      <Modal show={isModalVisible} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditPostForm title={props.title} postText={props.postText} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdatePostBtn;
