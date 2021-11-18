import React, { useContext } from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.png';
import logo1 from './logo1.gif';
import logo2 from './logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const loggedInUser = useContext(UserContext);

    return (
        <div style={{padding: '2rem 0'}}>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/"><img src={logo1} alt="" className="img-fluid" style={{width: '30%'}} /></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to="/" className="text-dark text-decoration-none nav-item">Home</Link>
                        <Link to="/destination" className="text-dark ms-3 text-decoration-none nav-item">Destination</Link>
                        <Link to="/blog" className="text-dark ms-3 text-decoration-none nav-item">Blog</Link>
                        <Link to="/contact" className="text-dark ms-3 text-decoration-none nav-item">Contact</Link>
                        <Link to="/login" className="text-dark ms-3 text-decoration-none nav-item">{loggedInUser[0].name||<span>Login</span>}</Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;