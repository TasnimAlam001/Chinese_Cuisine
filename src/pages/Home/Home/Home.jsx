import React, { useEffect, useState } from 'react';

const Home = () => {
    const [chefs, setChefs]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            {

            }
        </div>
    );
};

export default Home;