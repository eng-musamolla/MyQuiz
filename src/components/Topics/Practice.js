import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Practice = () => {
    const quizes = useLoaderData();
    console.log(quizes.data);
    return (
        <div>
            <h1>Practice Practice Practice</h1>
        </div>
    );
};

export default Practice;