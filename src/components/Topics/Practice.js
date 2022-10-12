
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const Practice = () => {
    const quizes = useLoaderData();
    const quiz = quizes.data.questions;
    console.log(quiz);
    // const [selectedOption, setSelectedOption] = React.useState();
    return (
        <Container>
            {
                quiz.map((question, index) => {
                    return (
                        <div>
                            <div className='d-flex'>
                                <h4><strong>Quiz {1 + index}:</strong> {question.question}</h4><strong>
                                </strong>                <p>Answer:{question.correctAnswer}</p>
                            </div>
                            <div>
                                <Form>
                                    {
                                        question.options.map(option => {
                                            return (
                                                <Form.Check
                                                    inline label={option} name="group1" type="checkbox"
                                                    id={`inline-checkbox-1`}
                                                />
                                            );
                                        })
                                    }
                                </Form>
                            </div>
                        </div>
                    );
                })
            }
        </Container>
    );
};

export default Practice;