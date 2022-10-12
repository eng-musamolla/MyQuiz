import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const QuizesCard = ({ quize }) => {
    const { id, logo, name, total } = quize;
    return (
        <Card className='bg-light rounded-3' >
            <Card.Img className='bg-secondary rounded-3' variant="top" src={logo} />
            <Card.Body className='d-flex justify-content-between align-items-center '>
                <Card.Title className='fw-bold'>{name}</Card.Title>
                <Button href={`/topics/${id}`} className='btn btn-info fw-bold '>Start Practice ✌️</Button>
            </Card.Body>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {total}
            </span>
        </Card>
    );
};

export default QuizesCard;