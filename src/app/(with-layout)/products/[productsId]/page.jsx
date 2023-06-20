import loadSingleCategoriesData from '@/app/utilites/loadSingleCategoriesData';
import React from 'react';

const SigngleDataPage= async({params}) => {
    const {details} = await loadSingleCategoriesData(params.productsId)
    console.log(details)
    return (
        <div>
            this is products id{params.productsId}
            <p>{details}</p>
        </div>
    );
};

export default SigngleDataPage;