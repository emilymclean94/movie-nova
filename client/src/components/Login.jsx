import { Form } from 'react-bootstrap';
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

        <div className='login rounded'>
            <h1>Login</h1>
            <Form className='mt-4' onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
                    <label className='mb-1' for="usernameInput">Username</label>
                    <input 
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                    type="text" className="form-control" id="usernameInput" aria-describedby="username" placeholder="janedoe86"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <label className='mb-1' for="passwordInput">Password</label>
                    <input
                    value={formState.email}
                    type="password" 
                    onChange={handleChange}
                    name="password" className="form-control" id="passwordInput" aria-describedby="password" placeholder="password"/>
                </Form.Group>
                <button type="submit" className="btn btn-dark">Login</button>
            </Form> 
        </div>
  
    )
  }
  
  export default Login;
  