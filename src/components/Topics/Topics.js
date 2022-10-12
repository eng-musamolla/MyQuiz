import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizesCard from './QuizesCard';
import img from '../../image/roadmap.png';

const Topics = () => {
    const quizes = useLoaderData();
    const quizedata = quizes.data;
    return (
        <Container fluid="lg">
            <Row xs={1} lg={2} className='pt-5 text-start' >
                <Col >
                    <h2>Roadmap to Become a Web Developer in 2022</h2>
                    <p><strong>Web Developer/ Full Stack Web Developer</strong> – How do you feel when you tag yourself with such titles? A long journey takes place to be called by such names. In the beginning, you might feel bored or terrified, but, trust me, this is the most popular and interesting field one should work on. You can also become a web developer provided you know why you want to learn it. According to a study, there are approximately 23 million software developers worldwide and the population growth is going to increase day by day. Now if you don’t know about web development, no worries! All your doubts will get cleared here. </p>
                </Col>
                <Col >
                    <img className='img-fluid rounded-3' src={img} alt="roadmap" border="0" />
                </Col>
            </Row>
            <Row xs={1} md={2} xxl={4} className='g-4 pt-5 ' >
                {quizedata.map(quize => <QuizesCard
                    key={quize.id}
                    quize={quize}>
                </QuizesCard>)}
            </Row>
        </Container>
    );

};

export default Topics;  