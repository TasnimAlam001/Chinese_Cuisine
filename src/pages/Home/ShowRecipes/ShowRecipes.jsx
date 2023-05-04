import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { FaCheckCircle, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import './Recipes.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowRecipes = ({ recipe }) => {
    const [btn, setBtn] = useState(true);
    const p = false;
    const notify = () => {
        toast("Added to your Favorite recipes..");
        setBtn(false);
    };
    const { name, ingredients, instructions, rating } = recipe;
    console.log(recipe);
    return (
        <Container>
            <Card className='mb-4 recipe'>
                <Card.Body>
                    <Card.Title className='text-center fs-2 my-4 py-3 border border-black recipe'>Recipe Name: <span className='text-primary'>{name}</span></Card.Title>
                    <hr />
                    <div className='d-flex gap-4'>
                        <Card.Text className='w-50 border border-black p-3 rounded'>
                            <span className='fw-bold'>Ingredients:</span>
                            {
                                ingredients.map(ingredient => <ul><li>{ingredient}</li></ul>)
                            }
                        </Card.Text>
                        <Card.Text className='w-50 border border-black p-3 rounded'>

                            <span className='fw-bold'>Instructions:</span>
                            {
                                instructions.map(instruction => <ul><li>{instruction}</li></ul>)
                            }
                        </Card.Text>

                    </div>
                    <hr />
                    <div className='d-flex'>
                        <div className='flex-grow-1'>
                            <span className='me-2'>Rating: </span>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-primary'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <span className='ms-1 pt-3'>{rating}</span>
                        </div>
                        {
                            btn && <div className=''>
                                <Button onClick={notify}>Add to favorite <FaCheckCircle></FaCheckCircle></Button>
                                <ToastContainer />
                            </div>
                        }
                    </div>


                </Card.Body>
            </Card>
        </Container >
    );
};

export default ShowRecipes;