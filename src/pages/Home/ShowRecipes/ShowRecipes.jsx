import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ShowRecipes = ({ recipe }) => {
    const { name, ingredients, instructions,rating } = recipe;
    console.log(recipe);
    return (
        <Container>
            <Card className='mb-4'>
                <Card.Body>
                    <Card.Title className='text-center fs-2'>Recipe Name: <span className='text-primary'>{name}</span></Card.Title>
                     <hr />
                    <div className='d-flex gap-4'>
                        <Card.Text className='w-50 border border-black p-3 rounded'>
                            Ingredients:
                            {
                                ingredients.map(ingredient => <ul><li>{ingredient}</li></ul>)
                            }
                        </Card.Text>
                        <Card.Text className='w-50 border border-black p-3 rounded'>
                            Instructions:
                            {
                                instructions.map(instruction => <ul><li>{instruction}</li></ul>)
                            }
                        </Card.Text>

                    </div>
                    <hr />
                    <p>{rating}</p>
                    
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ShowRecipes;