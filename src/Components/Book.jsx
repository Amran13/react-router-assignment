import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <Link to={`/books/${bookId}`}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> {bookName} </h2>
                        <div>
                            {
                                tags.map((tags, index) => <div key={index} className="badge"> {tags} </div>)
                            }
                        </div>
                        <p> {publisher} </p>
                        <h2 className="card-title"> {author} </h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;