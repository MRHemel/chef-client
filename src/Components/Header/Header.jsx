import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                        <li><a>Profile</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;