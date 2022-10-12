import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <h1 className='position-absolute top-50 start-50 translate-middle text-center text-danger'>route can't hound: 404 👉<Link to="/">Click Here</Link> to go Home</h1>
        </Container>
    );
};

export default Home;