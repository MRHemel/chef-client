import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Result } from 'postcss';

const Login = () => {

    const [error, setError] = useState('')


    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error)
            })

        form.reset()

    }

    return (
        <Form onSubmit={handleLogin}>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
                <h1 className='text-center text-5xl font-extrabold'>Please Login</h1>

                <div className="card-body">
                    <label className="input-group">
                        <span>Email</span>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                    </label>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p>Don't have registered account?Then <Link className='text-blue-400' to={'/register'}>Register</Link> </p>
                    <p className='text-rose-400'>{error.message}</p>
                </div>
            </div>
        </Form>
    );
};

export default Login;