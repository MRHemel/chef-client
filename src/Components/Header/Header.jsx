import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Chef Recipe Fair</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a>
                                Blog

                            </a>

                        </li>
                        <li><a>Profile</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;