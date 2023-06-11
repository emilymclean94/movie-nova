import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import Input from './Input';


const [userInfo, setUserInfo] = useState({
  name:'',
  username: '',
  genre: '',
  bio: '',
});

const EditForm = () => {

const [updateUser, { loading, error }] = useMutation(UPDATE_USER);
const handleUpdateUser = async () => {
  try {
    // Call the updateUser mutation with the updated user information
    await updateUser({ variables: { input: userInfo } });
    // Perform any necessary UI updates or refetching of data
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

return (
  <>
    <h1>{user.name}</h1>
    <form onSubmit={handleSubmit}>
      <Input
        name="name"
        type="text"
        value={user.name}
        placeholder={"Updated your name"}
        handleInput={handleInput}
      />
      <br />
      <Input
        name="username"
        type="text"
        value={user.username}
        placeholder={"Update Username"}
        handleInput={handleInput}
      />
      <br />
      <Input
        name="genre"
        type="text"
        value={user.genre}
        placeholder={"Update Genre"}
        handleInput={handleInput}
      />
      <br />
      <Input
        name="bio"
        type="text"
        value={user.bio}
        placeholder={"Update Bio"}
        handleInput={handleInput}
      />
      <br />
      <input type="submit" value="Update" />
    </form>
  </>
);
}