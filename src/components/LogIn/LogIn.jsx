import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css'

const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError]=useState('');
    const { signIn }= useContext(AuthContext);
    const handleLogIn =event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true })
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })


    }

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const handleGoogleSignIn =()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true })
            
        })
        .catch(error=>{
            console.log(error);
        })

    }
    const handleGithubSignIn =()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, {replace: true })
            
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Container className='w-25 m-auto my-4 border border-black p-3 rounded login'>
            <h3>Please LogIn</h3>
            <Form onSubmit={handleLogIn}>
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
                <Button variant="primary" type="submit" className='w-100'>
                    LogIn
                </Button>
                <br />
                <p className='text-center'>Or, continue with</p>
                <Button className='w-100 mb-2' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle> Google</Button> <br />
                <Button className='w-100' onClick={handleGithubSignIn}><FaGithub></FaGithub> Github</Button> <br />
                <Form.Text className='p-1'>
                    Don`t have an account? <Link to="/register">Register</Link>
                </Form.Text> <br />
                
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text> <br />
                
            </Form>
        </Container>
    );
};

export default LogIn;