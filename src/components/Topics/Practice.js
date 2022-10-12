
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
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


    const clickHandler = (option, correctAnswer) => {
        console.log("Option:", option);
        console.log("CorrectAnswer:", correctAnswer);

        if (option === correctAnswer) {
            success();
        } else {
            error();
        }
    }

    return (
        <Container >

            {
                quiz.map((question, index) => {
                    const popover = (
                        <Popover id="popover-basic">
                            <Popover.Body>{question.correctAnswer}
                            </Popover.Body>
                        </Popover>
                    );
                    const correctAnswer = question.correctAnswer;
                    return (
                        <Col className='bg-light rounded-3 shadow p-4 my-5 bg-white'>

                            <div className='border-1' variant="outline-success">
                                <div className='d-flex justify-content-between relative'>
                                    <div className='p-2 Quiz'>
                                        <h4 className='text-start pb-3' ><strong>Quiz {1 + index}:</strong> {question.question} </h4>
                                    </div>
                                    <div className='ShowAnswer'>
                                        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                            <EyeIcon className='text-success '></EyeIcon>
                                        </OverlayTrigger>

                                    </div>
                                </div>
                                <Form >
                                    <Row xs={1} md={2} xxl={4} className='g-4' key={`inline-radio`}>
                                        {
                                            question.options.map((option, index) => {
                                                return (
                                                    <Col >

                                                        <Form.Check className='rounded bg-success p-3 text-dark bg-opacity-10 text-start ps-5 ' style={{ width: '100%' }} onClick={() => {
                                                            clickHandler(option, correctAnswer);
                                                        }
                                                        } inline label={option} name="group1" type="radio"
                                                            id={`inline-radio-${index}`}
                                                        />

                                                    </Col>
                                                );
                                            })
                                        }
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    );
                })
            }
            <ToastContainer />
        </Container>
    );
};

export default Practice;