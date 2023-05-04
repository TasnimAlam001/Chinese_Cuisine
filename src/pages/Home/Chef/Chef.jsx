import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './chef.css'
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Chef = ({ Chef,showRecipes }) => {
    const { name, picture_url, likes, experience_years, quote,recipes,id } = Chef;

    return (
        <Container className=''>
            <Card className='mb-4 card chef'>
                <Row style={{ height: '450px' }} className='p-4'>
                    <Col>
                        <Card.Img className='my-auto' style={{ height: '350px', width: '300px' }} src={picture_url} />
                        <Card.Text className=''>
                            <span className='text-primary mt-2 mb-0'>Experience: </span>
                            {experience_years} Years
                        </Card.Text>
                        <Card.Text className=''>
                            <span className='text-primary m-0'>Likes: </span>
                            {likes} <FaThumbsUp className='text-primary mb-2'></FaThumbsUp>
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title className='fs-2'>{name}</Card.Title>
                            <Card.Text className='fs-5 fst-italic'>
                                <span className='text-primary'>Chefs Quote: </span>
                                {quote}
                            </Card.Text>
                            <Card.Text className=''>
                            <span className='text-primary m-0'>Total Recipes: </span>
                            {recipes.length}
                        </Card.Text>
                        <Link to={`/chef/${id}`} onClick={()=>showRecipes(recipes)}><Button variant="outline-primary" className=''>Go to Recipes <FaArrowRight></FaArrowRight></Button></Link>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>


        </Container>
    );
};

export default Chef;