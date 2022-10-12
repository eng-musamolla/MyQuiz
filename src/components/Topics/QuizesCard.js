import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const QuizesCard = ({ quize }) => {
    const { id, logo, name, total } = quize;
    return (

        <Col>
            <Card className='bg-light rounded-3 shadow p-3 mb-5 bg-white' >
                <Card.Img className='bg-secondary rounded-3' variant="top" src={logo} />
                <Card.Body className='d-flex justify-content-between align-items-center mt-3 px-0 pb-0 '>
                    <Card.Title className='mb-0 fs-6'>{name}</Card.Title>
                    <Link to={`/topics/${id}`} className='btn btn-info fs-6'>Start Practice✌️</Link>
                </Card.Body>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {total}
                </span>
            </Card>
        </Col>
    );
};

export default QuizesCard;