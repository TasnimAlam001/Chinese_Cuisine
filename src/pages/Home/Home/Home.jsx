import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import './Home.css'
import { Card, Container } from 'react-bootstrap';
import FamousRecipes from './FamousReccipes/FamousRecipes';


const Home = () => {
    const [chefs, setChefs] = useState([])
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, []);
    const showRecipes = (r) => {
        console.log(r);
        setRecipes(r);
        console.log(recipes);
    }
    return (
        <Container className='mb-5'>
            <div className='mb-5'>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://t4.ftcdn.net/jpg/02/89/80/03/360_F_289800335_l89vweOGANYIhKuVHRgpGh5QRwKQMsQx.jpg" alt="Card image" />
                    <Card.ImgOverlay className='ms-5 my-auto d-flex flex-column justify-content-center'>
                        <Card.Title className='fs-1'>LET`S <span className='fw-bold'>COOK....</span></Card.Title> <br />
                        <Card.Text className='fs-2'>
                            EATING IS A NECESSITY BUT <br />
                            COOKING IS AN ART
                        </Card.Text>
                        
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className='chefs mb-4'>
                {
                    chefs.map(chef => <Chef
                        key={chef.id}
                        Chef={chef}
                        showRecipes={showRecipes}
                    ></Chef>)
                }
            </div>
            <FamousRecipes></FamousRecipes>
            
            


        </Container>
    );
};

export default Home;