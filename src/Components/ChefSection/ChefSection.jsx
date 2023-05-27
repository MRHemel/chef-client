import React from 'react';
import './ChefSection.css'
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const ChefSection = () => {

    const chefs = useLoaderData()
    console.log(chefs.chef_id)
    return (
        <div className='w-11/12 mx-auto mt-5'>
            <h1 className='text-4xl text-center text-emerald-800 font-extrabold'>Chef Section</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.chef_id}
                        chef={chef}></ChefCard>)

                }
            </div>
        </div>
    );
};

export default ChefSection;