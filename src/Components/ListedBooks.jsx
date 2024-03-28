import React from 'react';
import BookDetails from './BookDetails';
import { Link, Outlet } from 'react-router-dom';

const ListedBooks = () => {
    const handleRead = (id) => {
        console.log('listedBook : ', id);
    }
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Listed Books
            </h1>
            <Link to="/listed-books/read-books">Read List</Link>
            <Link to="/listed-books/wishlist-books">Wishlist</Link>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default ListedBooks;