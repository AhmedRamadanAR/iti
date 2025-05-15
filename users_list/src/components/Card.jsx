import Card from 'react-bootstrap/Card';

export default function CustomCard(props) {
    return (
        <Card style={{border: '1px solid #007bff', 
                borderRadius:'40px', width: '18rem' }} className="text-center bg-light m-5" >
            <Card.Body>
                <div className="d-flex justify-content-center mb-3 ">
                    <Card.Img
                        src={props.image}
                        style={{
                            width: '100px',
                            height: '100px',
                    
                            borderRadius: '60px',
                            border: '2px solid #007bff',
                        }}
                    />
                </div>
                {
              props.role === "admin" ? (
                <Card.Title className='bg-danger w-50 mx-auto d-flex justify-content-center'>{props.role}</Card.Title>
) : props.role === "user" ? (
                <Card.Title className='bg-primary w-50 mx-auto d-flex justify-content-center'>{props.role}</Card.Title>
) : props.role === "moderator" ? (
                <Card.Title className='bg-warning w-50 mx-auto d-flex justify-content-center'>{props.role}</Card.Title>
) : null}

                <Card.Text>
                 {props.username}
                    <br/>
                      {props.email}
                                          <br/>

                     {props.phone}
                                         <br/>

                   {props.birthDate}

                </Card.Text>
            </Card.Body>
        </Card>
    );
}
