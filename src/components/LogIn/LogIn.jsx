import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

const LogIn = () => {
    const navigate = useNavigate()
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
            navigate('/')
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
            navigate('/')
            
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
            navigate('/')
            
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <Container className='w-25 m-auto mt-4'>
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
                <Button variant="primary" type="submit" className='w-25'>
                    LogIn
                </Button>
                <br />
                <Form.Text>
                    New Here ? <Link to="/register">Register</Link>
                </Form.Text> <br />
                
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text> <br />
                <button onClick={handleGoogleSignIn}>google logIn</button>
                <button onClick={handleGithubSignIn}>github logIn</button>
            </Form>
        </Container>
    );
};

export default LogIn;