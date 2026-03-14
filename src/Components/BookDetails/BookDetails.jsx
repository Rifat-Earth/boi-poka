import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams();
    const bookData = useLoaderData();

    const id = parseInt(bookId)

    const detailsData = bookData.find(book => book.bookId === id)

    const { bookName, author,  image,review } = detailsData


    return (
        <div className="card card-side max-w-6xl py-10 flex flex-col md:flex-row  mx-auto bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="book image" />
            </figure>
            <div className="card-body">
                <h1 className=' text-lg'><span className='font-bold text-lg'>Name: </span>{bookName}</h1>
                <h2 className="card-title">{author}</h2>
                <p className='font-stretch-50%'>{review}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Mark as Read</button>
                     <button className="btn btn-primary">Add to Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;