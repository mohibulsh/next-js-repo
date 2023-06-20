import Link from 'next/link';
import React from 'react';

const SingleCategories = ({catagorie}) => {
    const {name , category,id}=catagorie;
    return (
        <div className='border p-2'>
            <h2>{name}</h2>
            <p>{category}</p>
            <button className='btn border px-2 py-1 bg-slate-600 rounded'
            >
                <Link href={`/products/${id}`}>details</Link>
            </button>
        </div>
    );
};

export default SingleCategories;