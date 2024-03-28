import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h1 className='text-center font-bold'>Books</h1>
            <div className='grid grid-cols-3 gap-y-8 gap-x-4'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;