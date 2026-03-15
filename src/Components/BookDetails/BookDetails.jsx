import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { bookId } = useParams();
    const bookData = useLoaderData();

    const id = parseInt(bookId)

    const detailsData = bookData.find(book => book.bookId === id)

    const { bookName, author,  image,review } = detailsData

    const handleMarkAsRead = id =>{
        addToStoredDB(id)
    }

    const handleWishList = id =>{
        addToStoredDB(id)
    }


    return (
        <div className="card card-side max-w-6xl py-10 flex flex-col md:flex-row  mx-auto bg-base-100 shadow-sm">
            <figure className='w-full '>
                <img className=''
                    src={image}
                    alt="book image" />
            </figure>
            <div className="card-body">
                <h1 className=' text-lg'><span className='font-bold text-lg'>Name: </span>{bookName}</h1>
                <h2 className="card-title">{author}</h2>
                <p className=''>{review}</p>
                <div className="card-actions justify-start">
                    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-primary">Mark as Read</button>
                     <button onClick={()=>handleWishList(id)} className="btn btn-primary">Add to Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;