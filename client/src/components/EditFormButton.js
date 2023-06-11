import React, { useState } from 'react';
import EditForm from './EditForm';


const EditFormButton = () => {

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
      {isFormVisible && <EditForm />}
    </div>
  );
};

export default EditFormButton;
