import { Link } from 'react-router-dom';
import Logo from '../../image/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Header.css';

const Header = () => {
    return (

        <Navbar key={"md"} expand={"md"} className="sticky-top navbar  mb-3">
            <Container fluid="lg" >
                <Navbar.Brand className='text-start'>
                    <Link to="/"><img className='w-100' src={Logo} alt="logo" /></Link>
                </Navbar.Brand>
                <Navbar.Toggle className='bg-light' aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas className="navbar d-flex justify-content-end"
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="end">
                    <Offcanvas.Header className='text-light ' closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            <img className='w-100 pe-5' src={Logo} alt="logo" />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="text-uppercase fw-bold fs-6">
                        <Link className='text-light text-decoration-none px-3' to='topics' >Topix</Link>
                        <Link className='text-light text-decoration-none px-3 ' to='statistics' >Statistics</Link>
                        <Link className='text-light text-decoration-none ps-3 pe-0 ' to='blog' >Blog</Link>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    );
};

export default Header;