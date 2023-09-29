import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ProfileEditForm from "./ProfileEditForm";
import "./dashboard.css";

const EditFormButton = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    document.getElementById("dash").classList.add("hidden");
    document.getElementById("dash1").classList.add("hidden");
    document.getElementById("dash2").classList.add("hidden");
    document.getElementById("dash3").classList.add("hidden");
    setIsFormVisible(true);
    setIsButtonVisible(false);
  };

  return (
    <>
      {isButtonVisible && (
        <span
        className="edit-btn"
          id="button"
          onClick={handleButtonClick}
        >
          (edit profile)
        </span>
      )}
      {isFormVisible && (
        <ProfileEditForm
          username={props.username}
          name={props.name}
          genre={props.genre}
          bio={props.bio}
        />
      )}
    </>
  );
};

export default EditFormButton;
