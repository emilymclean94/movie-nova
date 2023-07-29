import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ProfileForm from "./ProfileForm";

const EditFormButton = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    document.getElementById("dash").classList.add("hidden");
    document.getElementById("dash1").classList.add("hidden");
    document.getElementById("dash2").classList.add("hidden");
    document.getElementById("dash3").classList.add("hidden");
    document.getElementById("dash4").classList.add("hidden");
    setIsFormVisible(true);
    setIsButtonVisible(false);
  };

  return (
    <div>
      {isButtonVisible && (
        <Button
          className="btn btn-dark"
          id="button"
          onClick={handleButtonClick}
        >
          Update Profile
        </Button>
      )}
      {isFormVisible && (
        <ProfileForm
          username={props.username}
          name={props.name}
          genre={props.genre}
          bio={props.bio}
        />
      )}
    </div>
  );
};

export default EditFormButton;
