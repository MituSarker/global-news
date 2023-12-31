import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand > <Link to="/">Global News</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">All News</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated links
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">
                    {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
                                    </>
                            }
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
                <div className='d-lg-none'>
                  <LeftSideNav></LeftSideNav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;