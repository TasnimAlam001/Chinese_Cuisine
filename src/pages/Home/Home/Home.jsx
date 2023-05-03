import React, { useEffect, useState } from 'react';
import Chef from '../Chef';

const Home = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
                chefs.map(chef =><Chef
                key={chef.id}
                Chef={chef}
                ></Chef>)
            }
        </div>
    );
};

export default Home;