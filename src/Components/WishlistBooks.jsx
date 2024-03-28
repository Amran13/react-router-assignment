import React, { useEffect, useState } from 'react'
import { getStoredWishlistItems } from './localStorage';
import { useLoaderData } from 'react-router-dom';
import ReadItem from './ReadItem';

function WishlistBooks() {
  const books = useLoaderData();
    const [wishlistBooks, setWishlistBooks] = useState([]);
    useEffect( () => {
      const getWishList = getStoredWishlistItems()
      console.log(books.length)
      if(books.length > 0){
          const bookWishList = [];
          for(const id of getWishList){
              const matchedBooks = books.find(book => book.bookId === id)
              bookWishList.push(matchedBooks)
          }
          setWishlistBooks(bookWishList);
      }
  },[])

  return (
    <div>
      <h2>WishList Books</h2>
        {
            wishlistBooks.map(book => <ReadItem key={book.bookId} book={book}></ReadItem>)
        }
    </div>
  )
}

export default WishlistBooks
