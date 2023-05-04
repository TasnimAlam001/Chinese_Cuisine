import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const [error, setError]=useState('');
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // validation 
        if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(password)){
            setError('Invalid Password')
            return
        }
        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                event.target.reset();
                
                navigate('/');
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    return (
        <Container className='w-25 m-auto my-4 border border-black register p-3 rounded'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <p><small>Please add at least One uppercase,lowercase,numeric character,spacial character and add at least 8 characters in password.</small></p>
                <Form.Group className="" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept terms and conditions" />
                </Form.Group>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text> <br />
                <Button variant="primary" type="submit" className='w-100'>
                    Register
                </Button>
                <br />
                <Form.Text>
                    Already Have an Account ? <Link to="/logIn">LogIn</Link>
                </Form.Text> <br />
                
                
            </Form>
        </Container>
    );
};

export default Register;