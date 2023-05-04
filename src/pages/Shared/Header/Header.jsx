import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    
    const handleLogOut =()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error);
        })
    }

    
    return (
        <Container className='mb-5 mt-2'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='rounded'>
                <Container>
                    <Navbar.Brand href="#home">Chinese cuisine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none px-2' to="/">Home</Link>
                            <Link className='text-decoration-none px-2'  to="/blog">Blog</Link>
                            
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle className='my-auto' style={{ fontSize: '2rem' }}></FaUserCircle>}

                            {user ?
                                <Button onClick={handleLogOut} variant="dark">Log Out</Button> :
                                <Link to="/login">
                                    <Button variant="dark">Log In</Button>
                                </Link>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;