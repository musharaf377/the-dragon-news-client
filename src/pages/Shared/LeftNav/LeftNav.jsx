/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCategories] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    console.log(catagories);
    return (
        <div>
            <h4>All Caregories</h4>
            {
                catagories.map(category => <p key={category.id}>
                    <Link to={`category/${category.id}`} className='text-decoration-none'>{category.name}</Link>
                </p>)
            }
            
        </div>
    );
};

export default LeftNav;