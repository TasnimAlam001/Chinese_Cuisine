import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <Container className='w-25 m-auto mt-4'>
            <h3>Please LogIn</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit" className='w-25'>
                    LogIn
                </Button>
                <br />
                <Form.Text>
                    New Here ? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className='Text-success'>

                </Form.Text>
                <Form.Text className='Text-danger'>

                </Form.Text>
            </Form>
        </Container>
    );
};

export default LogIn;