import React from 'react'
import PagesToRead from './PagesToRead';
import { Link } from 'react-router-dom';

function ReadItem({book}) {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
  return (
    <div>
      <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='bg-base-200 px-4 w-1/3'>
                        <img src={image} className="mx-auto rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 ml-4'>
                        <h1 className="text-2xl font-bold"> {bookName} </h1>
                        <p className="py-2"> By : {author} </p>
                        <hr />
                        {/* <p className="py-2"> By : {category} </p> */}
                        <hr />
                        <div>
                            <span>Tag : </span> 
                            {
                                tags.map((tags, index) => <div key={index} className="badge bg-cyan-400 px-2 py-4 my-2 mx-2">  {tags} </div>)
                            }
                            <span> Published : {yearOfPublishing} </span>
                        </div>
                        <div>
                            <p>Publisher : {publisher}   <span className='ml-6'> Pages : {totalPages} </span> </p>
                        </div>
                        <div>
                            <div className="badge bg-cyan-400 px-2 py-4 my-2 mx-2"> Category : {category} </div>
                            <div className="badge bg-cyan-400 px-2 py-4 my-2 mx-2"> Rating : {rating} </div>
                            {/* <Link to={`/books/${bookId}`}>View Details</Link> */}
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
  )
}

export default ReadItem
