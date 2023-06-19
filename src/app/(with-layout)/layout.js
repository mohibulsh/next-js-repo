
import React from 'react';
import Navbar from '../components/Navbar';
const widthLayout = ({ children }) => {
    return (
        <div>
           <Navbar/>
            {children}
            <footer>
                this is a footer in the page
            </footer>
        </div>
    );
};

export default widthLayout;