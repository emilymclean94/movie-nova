import React, { useState } from 'react';
import EditForm from './EditForm';


const EditFormButton = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    setIsFormVisible(true);
    setIsButtonVisible(false);
  };

  return (
    <div >
       {isButtonVisible && (
      <button className='btn btn-dark' onClick={handleButtonClick}>Open Edit Form</button>
      )}
      {isFormVisible && <EditForm username={props.username} name={props.name} genre={props.genre} bio={props.bio} />}
    </div>
  );
};

export default EditFormButton;

///delete this text
