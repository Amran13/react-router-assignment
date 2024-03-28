import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredReadItems, getStoredWishlistItems, saveReadItems, saveWishlistItems } from './localStorage';

const BookDetails = () => {
    const [readItem, setReadItem] = useState([]);
    const [matched, setMatched] = useState([]);
    const books = useLoaderData();
    // console.log('book : ', books)
    const params = useParams();
    const id = params.id;
    // console.log('id', id)
    useEffect(() => {
        if(books.length > 0){
            console.log(books.length)
            const myBook = books.find(item => item.bookId == id)
            setMatched(myBook)
        }
    }, [])

    // console.log(myBook)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = matched;
    const handleRead = (id) => {
        saveReadItems(id)
        toast.success('Added as read')
        
    }
    const handleWishlist = (id) => {
        console.log(id)
        const readItems = getStoredReadItems();
        console.log(readItems)
        const exist = readItems.find(item => item === id)
        console.log(exist)
        if(exist){
            console.log(readItems, exist)
            toast.error('already in read items')
        }
        else{
            saveWishlistItems(id)
        }
    }
    return (
        <div>
            <div className="hero min-h-screen">
                    <Toaster></Toaster>
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 bg-base-200 px-4 py-10'>
                        <img src={image} className="max-w-sm mx-auto rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 ml-4'>
                        <h1 className="text-5xl font-bold"> {bookName} </h1>
                        <p className="py-6"> By : {author} </p>
                        <hr />
                        <p className="py-6"> By : {category} </p>
                        <hr />
                        <p> Review : {review} </p>
                        <div>
                            {
                             matched.length  && tags.map((tag, index) => <div key={index} className="badge"> {tag} </div>)
                            }
                        </div>
                        <div className='space-x-4 mt-4'>
                            <button onClick={() => handleRead(bookId)} className="btn btn-primary">Read</button>
                            <button onClick={() => handleWishlist(bookId)} className="btn btn-primary">WishList</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;