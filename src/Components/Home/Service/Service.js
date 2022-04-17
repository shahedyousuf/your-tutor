import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, image, description } = service
    return (
        <div className='col-12 col-md-6 col-lg-4 mt-2 position-relative'>
            <Card className=''>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <br />
                    <Button className='position-absolute bottom-0 translate-middle-x' variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;