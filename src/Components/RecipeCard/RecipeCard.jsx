import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({ r }) => {

    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const { recipe_photo, recipe_name } = r;
    const notify = () => {
        toast("Added to your favourite list.")
        setButtonDisabled(true);
    };


    return (
        <div className='m-4 p-4 '>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={recipe_photo
                } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>

                </div>
                <div className='ms-4'>
                    <p className='text-3xl '>Ingredients:</p>
                    <ul className='list-decimal ms-4'>
                        <li>Spaghetti</li>
                        <li>Pancetta</li>
                        <li>Eggs</li>
                        <li>Parmesan cheese</li>
                        <li>Black pepper</li></ul>
                    <p className='text-3xl'> Cooking Method : <span className='text-xl'>1. Cook the spaghetti according to package instructions.\n2. In a separate pan, cook the pancetta until crispy.\n3. In a bowl, whisk together eggs, Parmesan cheese, and black pepper.\n4. Drain the cooked spaghetti and add it to the pan with pancetta. Mix well.\n5. Remove the pan from heat and pour in the egg mixture. Toss quickly to coat the spaghetti.\n6. Serve hot with additional Parmesan cheese and black pepper</span> </p>
                    <p className='font-extrabold my-3'>rating:4.5</p>

                    <button onClick={notify} disabled={isButtonDisabled} className="btn btn-primary my-3">Add to favourite</button>
                    <ToastContainer></ToastContainer>

                </div>



            </div>
        </div>
    );
};

export default RecipeCard;