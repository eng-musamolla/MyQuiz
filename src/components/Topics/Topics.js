import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizesCard from './QuizesCard';

const Topics = () => {
    const quizes = useLoaderData();
    const quizedata = quizes.data;
    return (
        <div className='card-group' >
            {quizedata.map(quize => <QuizesCard>
                quize={quize}
            </QuizesCard>)}
        </div>
    );

};

export default Topics;  