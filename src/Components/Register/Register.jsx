import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')

    const handleCreateUser = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                setError(error)
            })

        form.reset()
    }


    return (
        <Form onSubmit={handleCreateUser}>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
                <h1 className='text-center text-5xl font-extrabold'>Please Register</h1>

                <div className="card-body">
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                    </label>
                    <label className="input-group">
                        <span>Photo URL</span>
                        <input type="text" name='photo' placeholder="Enter your photo url" className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                    </label>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className='text-rose-400'>{error.message}</p>
                </div>
            </div>
        </Form>
    );
};

export default Register;