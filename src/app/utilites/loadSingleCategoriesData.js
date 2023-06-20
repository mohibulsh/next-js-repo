import React from 'react';

const loadSingleCategoriesData = async(productsId) => {
   const res = await fetch(`http://localhost:5000/products/${productsId}`,{
    cache:'no-cache'
   })
   return res.json()
};

export default loadSingleCategoriesData;