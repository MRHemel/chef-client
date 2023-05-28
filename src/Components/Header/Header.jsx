import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='mx-auto w-11/12 '>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-5xl font-extrabold	 text-emerald-800">Chef Recipe Fair</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to={'/blog'}>Blog</Link>
                        </li>
                        {
                            user ? <Link onClick={handleLogOut} variant="secondary">Log out</Link> : <ul className='menu menu-horizontal px-1'><li><Link to={'/login'}>Login</Link></li>
                                <li><Link to={'/register'}>Register</Link></li></ul>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;