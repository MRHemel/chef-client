import React from 'react';

const RecipeCard = ({ r }) => {
    const { recipe_photo, recipe_name } = r;
    return (
        <div className='m-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={recipe_photo
                } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                </div>


            </div>
        </div>
    );
};

export default RecipeCard;