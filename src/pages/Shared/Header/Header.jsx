import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);

    return (
        <Container className='mb-5 mt-3'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='rounded header'>
                <Container>
                    <Navbar.Brand className='fw-bold fs-3' href="#home">Chinese Cuisine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none px-2' to="/">Home</Link>
                            <Link className='text-decoration-none px-2' to="/blog">Blog</Link>
                            

                        </Nav>
                        <Nav>
                            {user &&
                                <div className=''>
                                    <img style={{height:'40px',width:'40px'}} className='me-3 rounded-circle pp' src={user.photoURL} alt="" />
                                    
                                </div>
                            }

                            {user ?
                                <Button onClick={handleLogOut} variant="primary">Log Out</Button> :
                                <Link to="/login">
                                    <Button variant="primary">Log In</Button>
                                </Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;