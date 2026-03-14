import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='max-w-6xl mx-auto py-12  text-center '>
           <h1 className='text-red-500 text-3xl font-bold mb-12'> page is not found</h1> 
           <Link to='/'><button className='btn btn-primary'>Go to Home</button></Link>
        </div>
    );
};

export default Error;