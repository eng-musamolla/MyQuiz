import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import QuizesCard from './QuizesCard';

const Topics = () => {
    const quizes = useLoaderData();
    const quizedata = quizes.data;
    return (
        <Container>
            <div className='card-group gap-4 pt-5' >
                {quizedata.map(quize => <QuizesCard
                    key={quize.id}
                    logo={quize.logo}
                    name={quize.name}
                    total={quize.total}>
                </QuizesCard>)}
            </div>
        </Container>
    );

};

export default Topics;  