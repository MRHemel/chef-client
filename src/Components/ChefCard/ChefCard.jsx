import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { chef_name, chef_picture
        , likes, num_recipes, years_of_experience } = chef;



    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={chef_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-3xl font-bold text-center">{chef_name}</h2>
                <p className='font-bold'>Years of Experience: {years_of_experience}</p>
                <p className='font-bold'>Numbers of recipes: {num_recipes}</p>
                <p className='font-bold'>Likes: {likes}</p>
                <div className="card-actions justify-end">
                    <Link ><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;