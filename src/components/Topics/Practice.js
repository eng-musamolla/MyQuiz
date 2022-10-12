
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Practice.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Practice = () => {
    const quizes = useLoaderData();
    const quiz = quizes.data.questions;
    console.log(quiz);
    return (
        <Container>
            {
                quiz.map((question, index) => {
                    const popover = (
                        <Popover id="popover-basic">
                            <Popover.Body>{question.correctAnswer}
                            </Popover.Body>
                        </Popover>
                    );

                    const success = () => toast.success('Your answer is correct', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    const error = () => toast.error('You gave the wrong answer!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                    return (
                        <div>
                            <div className='d-flex justify-content-between relative'>
                                <div className='p-2 Quiz'>
                                    <h4 ><strong>Quiz {1 + index}:</strong> {question.question} </h4>

                                </div>
                                <div className='ShowAnswer'>
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <EyeIcon className='text-success '></EyeIcon>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div>
                                <Form>
                                    {
                                        question.options.map(option => {
                                            return (
                                                <Button variant="outline-success" className='p-3 m-2' onClick={option === question.correctAnswer ? success : error}>
                                                    <Form.Check
                                                        inline label={option} name="group1" type="radio"
                                                        id={`inline-checkbox-1`}
                                                    />

                                                </Button>
                                            );
                                        })
                                    }
                                </Form>
                            </div>
                        </div>
                    );
                })
            }
            <ToastContainer />
        </Container>
    );
};

export default Practice;