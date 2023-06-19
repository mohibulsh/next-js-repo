import Link from 'next/link';
import React from 'react';
const navLinks =[
    {
        path:'/',
        title:'home'
    },
    {
        path:'/about',
        title:'About'
    },
    {
        path:'/profile',
        title:'Profile'
    },
    {
        path:'/blogs',
        title:'Blogs'
    },
    {
        path:'/dashboard',
        title:'Dashboard'
    },
]
const Navbar = () => {
    return (
        <nav className='flex items-center justify-around  container mx-auto'>
            <h1 className='text-3xl text-red-700 font-semibold'>Next Hero</h1>
            <ul className='flex gap-16'>
               {
                navLinks.map(({path,title})=><li key={path}>
                    <Link href={path}>{title}</Link>
                </li>)
               }
            </ul>
        </nav>
    );
};

export default Navbar;