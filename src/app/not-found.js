import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-red-500'>Not Found</h2>
            <p>Could not find requested resource</p>
            <p className='border inline-block px-4 py-1 rounded my-2'>
                View <Link href="/blogs">all posts</Link>
            </p>
        </div>
    );
};

export default NotFound;