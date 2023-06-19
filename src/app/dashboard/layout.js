import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div>slidebar</div>
            {children}

        </div>
    );
};

export default DashboardLayout;