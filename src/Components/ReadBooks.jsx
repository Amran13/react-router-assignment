import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredReadItems } from './localStorage';
import ReadItem from './ReadItem';

function ReadBooks() {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    

    useEffect( () => {
        const getReadsList = getStoredReadItems();
        console.log(books.length)
        if(books.length > 0){
            const bookReads = [];
            for(const id of getReadsList){
                const matchedBooks = books.find(book => book.bookId === id)
                bookReads.push(matchedBooks)
            }
            setReadBooks(bookReads);
            console.log(readBooks);
        }
    },[])

 
  return (
    <div>
      <h2>REad Books</h2>
        {
            readBooks.map(book => <ReadItem key={book.bookId} book={book}></ReadItem>)
        }
    </div>
  )
}

export default ReadBooks
