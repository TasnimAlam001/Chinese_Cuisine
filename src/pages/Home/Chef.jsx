import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'chef.css'

const Chef = ({ Chef }) => {
    const { name, picture_url, likes, experience_years,quote } = Chef;

    return (
        <Container className=''>

            <Card className='mb-4 card'>
                <Row style={{ height: '550px' }} className='p-4'>
                    <Col>
                        <Card.Img className='my-auto' style={{ height: '350px', width:'300px' }}  src={picture_url}  />

                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className='fs-1'>{name}</Card.Title>
                            <Card.Text className='fs-2 fst-italic'>
                                {quote}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>


        </Container>
    );
};

export default Chef;