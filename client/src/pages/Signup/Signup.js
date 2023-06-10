import React from 'react';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Signup() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        genre: '',
        bio: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };
    return (

        <Container className='signup'>
            <h1>Signup.</h1>
            <form onSubmit={handleFormSubmit}>
            <div class="form-group">
                    <label for="nameInput">Name</label>
                    <input 
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    type="text" class="form-control" id="nameInput" aria-describedby="name" placeholder="Jane Doe"/>
                </div>
                <div class="form-group">
                    <label for="emailInput">Email address</label>
                    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="janeDoe86@mail.com"/>
                </div>
                <div class="form-group">
                    <label for="usernameInput">Username</label>
                    <input type="text" class="form-control" id="usernameInput" aria-describedby="name" placeholder="janedoe86"/>
                </div>
                <div class="form-group">
                    <label for="passwordInput">Password</label>
                    <input type="password" class="form-control" id="passwordInput" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <label for="genreInput">Favorite Genre</label>
                    <input type="password" class="form-control" id="genreInput" placeholder="Horror"/>
                </div>
                <div class="form-group">
                    <label for="bioInput">Bio</label>
                    <input type="password" class="form-control" id="bioInput" placeholder="Tell us about yourself!"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </Container>

    )
}

export default Signup;
