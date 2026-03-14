import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    // console.log(book);
    const { bookName, author, rating, category, image, yearOfPublishing, bookId } = book

    return (
        <Link to={`/bookDetails/${bookId}`}>
         
            <div className="card bg-base-100 shadow-sm p-5">
                <figure className='bg-neutral-200 p-5 rounded-2xl'>
                    <img className='w-42 h-48 p-2 '
                        src={image}
                        alt="book" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {author}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>

                    </h2>
                    <p><span className='font-bold'>Name:</span> {bookName}</p>
                    <div className="card-actions justify-start">
                        <div className="badge badge-outline p-2 ">{category}</div>
                        <div className="badge badge-outline p-2 ml-10 font-bold">{rating}</div>
                    </div>
                </div>
                
            </div>
            
        </Link>
    );
};

export default Book;