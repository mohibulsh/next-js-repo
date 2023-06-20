import React from 'react';

const loadCategoriesData = async() => {
   const res =await fetch('http://localhost:5000/products',{
    cache:'force-cache'
   })
   return res.json()
};

export default loadCategoriesData;