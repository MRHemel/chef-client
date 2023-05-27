import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefRecipe = () => {
    // let { id } = useParams();
    const recipe = useLoaderData();

    const { chef_id, chef_name, chef_picture
        , likes, num_recipes, years_of_experience, chef_description, recipes } = recipe;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>
                    <p>Year of experience : {years_of_experience}</p>
                    <p>Number of recipes : {num_recipes}</p>
                    <p>likes : {likes}</p>
                    <p>Chef's Bio : {chef_description}</p>


                </div>
            </div>
            {
                recipes.map(r => <RecipeCard
                    r={r}></RecipeCard>)

            }

        </div >
    );
};

export default ChefRecipe;