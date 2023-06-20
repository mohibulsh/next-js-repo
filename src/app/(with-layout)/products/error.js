'use client'
import React, { useEffect } from 'react';

const ProductsError = ({ error, reset }) => {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className='text-center'>
            <h3 className=' text-red-600'>{error.message || 'somethings is wrong'}</h3>
            <button onClick={() => reset()}>Reset</button>
        </div>
    );
};

export default ProductsError;