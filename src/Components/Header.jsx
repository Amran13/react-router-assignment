import React from 'react';
import headerImage from '../assets/book-7672463_1280.webp';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className='flex'>
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                        <Link to="/listed-books"><button className="btn btn-primary">View the list</button></Link>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-2/3' src={headerImage} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;