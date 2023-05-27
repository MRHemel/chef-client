import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className="bg-gray-800 text-white flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Chef Recipe Fair</h1>
                <p className="text-lg">Here you will get our best Chef's information.</p>
                <button class="rounded-full border-blue-950 bg-cyan-600	p-2">Get Started</button>
            </div>
            <div className="md:w-1/2">
                <img className="w-full h-auto" src="https://img.freepik.com/free-photo/medium-shot-chef-wearing-gloves_23-2148723249.jpg?w=1060&t=st=1685206818~exp=1685207418~hmac=53601b4050d3fcc3d85f663219857c7cac4181d60a043fec1e13ffb79a32add6" alt="Banner Image" />
            </div>

        </div>
    );
};

export default Home;