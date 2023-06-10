import { Container } from 'react-bootstrap';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

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
            <h1>Login.</h1>
        </Container>
  
    )
  }
  
  export default Login;
  