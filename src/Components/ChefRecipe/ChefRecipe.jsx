import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipe = () => {
    let { id } = useParams();
    const recipe = useLoaderData();
    console.log(recipe)
    return (
        <div>
            <h2>recipe</h2>
        </div>
    );
};

export default ChefRecipe;