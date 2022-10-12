import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar className='sticky-top navbar' variant="dark" >
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand className='text-start' href="/">
                    <img className='w-100' src={Logo} alt="logo" />
                </Navbar.Brand>
                <Nav className='  text-uppercase fw-bold fs-6 '>
                    <Link className='text-light text-decoration-none px-3' to='topics' >Topix</Link>
                    <Link className='text-light text-decoration-none px-3 ' to='statistics' >Statistics</Link>
                    <Link className='text-light text-decoration-none px-3 ' to='blog' >Blog</Link>
                </Nav>
            </Container>

        </Navbar >
    );
};

export default Header;