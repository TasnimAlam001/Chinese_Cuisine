import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ShowRecipes from '../ShowRecipes/ShowRecipes';
import { FaThumbsUp } from 'react-icons/fa';

const Recipes = () => {
    const chefData = useLoaderData();
    const {recipes,picture_url,experience_years,likes,name,quote} = chefData;
    
    console.log(chefData);
    console.log(recipes);
    return (
        <Container>
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
                        
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            {
                recipes.map(recipe=><ShowRecipes
                key={recipe.id}
                recipe = {recipe}
                ></ShowRecipes>)
            }
            
        </Container>
    );
};

export default Recipes;