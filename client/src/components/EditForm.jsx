import React, { useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations'
import { Form } from 'react-bootstrap';
import Auth from '../utils/auth';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import { useParams } from 'react-router';
// import { useQuery } from '@apollo/client';

const EditForm = () => {

  const [editUser, setEditUser] = useState({
    name: '',
    username: '',
    genre: '',
    bio: '',
});

  const [updateUser] = useMutation(UPDATE_USER);

  const handleUpdateUser = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setEditUser({
      ...editUser,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(editUser);

    try {
      const { data } = await updateUser({
        variables: { ...editUser },
      });
    
      const token = data.updateUser.token
           Auth.updateUser(token);

    } catch (e) {
        console.error(e);
    }
  };

  return (
    <>
      <h1>Update Your Information</h1>
      <form onSubmit={handleFormSubmit}>
        <Form.Group>
          <input
          name="name"
          type="text"
          placeholder="Updated your name"
          onChange={handleUpdateUser}
          value={editUser.name}
          />
          </Form.Group>
        <Form.Group>
          <input 
          name="username"
          type="text"
          placeholder="Update Username"
          onChange={handleUpdateUser}
          value={editUser.username}
          />
        </Form.Group>
        <Form.Group>
          <input
          name="genre"
          type="text"
          placeholder="Update Genre"
          onChange={handleUpdateUser}
          value={editUser.genre}
          />
        </Form.Group>
        <Form.Group>
          <input
          name="bio"
          type="text"
          placeholder="Update Bio"
          onChange={handleUpdateUser}
          value={editUser.bio}
          />
        </Form.Group>
        <input className='btn btn-dark my-3' type="submit" value="Update" />
      </form>
    </>
  );
}
export default EditForm;

