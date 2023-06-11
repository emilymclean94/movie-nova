import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {

    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data);
           const token = data.login.token
           Auth.login(token);

        } catch (e) {
            console.error(e);
        }

 
        setFormState({
            username: '',
            password: '',
        })
        window.location.assign('/dashboard');
    }

    return (

        <Container className='login'>
            <h1>Login</h1>
            <form className='mt-4' onSubmit={handleFormSubmit}>
            <div class="form-group">
                    <label for="usernameInput">Username</label>
                    <input 
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    type="text" class="form-control" id="usernameInput" aria-describedby="username" placeholder="janedoe86"/>
                </div>
                <div class="form-group">
                    <label for="passwordInput">Password</label>
                    <input
                    value={formState.email}
                    type="password" 
                    onChange={handleChange}
                    name="password" class="form-control" id="passwordInput" aria-describedby="password" placeholder="password"/>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Login</button>
            </form> 
        </Container>
  
    )
  }
  
  export default Login;
  