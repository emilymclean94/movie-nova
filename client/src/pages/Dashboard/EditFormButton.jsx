import React, { useState } from 'react';
import EditForm from './EditForm';


const EditFormButton = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = () => {
    document.getElementById('dash').classList.add('hidden');
    document.getElementById('dash2').classList.add('hidden');
    document.getElementById('dash3').classList.add('hidden');
    setIsFormVisible(true);
    setIsButtonVisible(false);
  };

  return (
    <div >
       {isButtonVisible && (
      <button className='btn btn-dark' id='button' onClick={handleButtonClick}>Update Profile</button>
      )}
      {isFormVisible && <EditForm username={props.username} name={props.name} genre={props.genre} bio={props.bio} />}
    </div>
  );
};

export default EditFormButton;


