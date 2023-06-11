import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'
import Input from './Input';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';

const EditForm = () => {
  const { username: userParam } = useParams();

  const { data, loading, error } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  }); //loading was next to data

  const [updateUser] = useMutation(UPDATE_USER);

  const [userInfo, setUserInfo] = useState({
    name: '',
    username: '',
    genre: '',
    bio: '',
  });

  useEffect(() => {
    if (data) {
      const user = userParam ? data.user : data.me;
      setUserInfo(user);
    }
  }, [data, userParam]);
  console.log(userInfo);
  
  const handleUpdateUser = async () => {
    try {
      await updateUser({ variables: { input: userInfo } });
      // Perform any necessary UI updates or refetching of data
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    handleUpdateUser();
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data || (!userParam && !data.me) || (userParam && !data.user)) {
    return <p>User not found.</p>;
  }


  return (
    <>
      <h1>{userInfo.name}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          value={userInfo.name}
          placeholder="Updated your name"
          handleInput={handleInput}
        />
        <br />
        <Input
          name="username"
          type="text"
          value={userInfo.username}
          placeholder="Update Username"
          handleInput={handleInput}
        />
        <br />
        <Input
          name="genre"
          type="text"
          value={userInfo.genre}
          placeholder="Update Genre"
          handleInput={handleInput}
        />
        <br />
        <Input
          name="bio"
          type="text"
          value={userInfo.bio}
          placeholder="Update Bio"
          handleInput={handleInput}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </>
  );
}
export default EditForm;