import React from 'react';
import { Container, Tooltip } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizes = useLoaderData();
    const data = quizes.data;
    console.log(data);
    return (
        <Container fluid="lg">
            <div className='position-absolute top-50 start-50 translate-middle'>

                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                </LineChart>
            </div>

        </Container>


    );
};

export default Statistics;