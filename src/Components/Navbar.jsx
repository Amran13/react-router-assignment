import React from 'react';
import { NavLink } from 'react-router-dom';
import './style/Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/listed-books">Listed Books</NavLink>
                        <NavLink to="/pages-to-read">Pages to Read</NavLink>
                        <NavLink to="/best-selling-books">Best Selling</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"> Book Vibe </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/listed-books">Listed Books</NavLink>
                    <NavLink to="/pages-to-read">Pages to Read</NavLink>
                        <NavLink to="/best-selling-books">Best Selling</NavLink>
                </ul>
            </div>
            <div className="navbar-end space-x-6">
                <a className="btn">Sign In</a>
                <a className="btn">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;