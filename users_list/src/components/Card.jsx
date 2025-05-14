import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CustomCard() {
    return (
        <Card style={{border: '1px solid #007bff', 
                borderRadius:'40px', width: '18rem' }} className="text-center " >
            <Card.Body>
                <div className="d-flex justify-content-center mb-3 ">
                    <Card.Img
                        variant="top"
                        src="https://dummyjson.com/icon/emilys/128"  
                        style={{
                            width: '100px',
                            height: '100px',
                        
                            borderRadius: '60px',
                            border: '2px solid #007bff',
                        }}
                    />
                </div>
                <Card.Title className='bg-danger w-50 mx-auto d-flex justify-content-center'>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
