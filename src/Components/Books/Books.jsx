import React from 'react';

import Book from '../Book/Book';

const Books = ({bookData}) => {


// console.log(bookData);

    return (
        <div className='max-w-6xl mx-auto'>
        <h1 className='flex justify-center items-center py-10 font-bold text-4xl'>Books</h1>
        <div className='py-4 grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
               
                bookData?.map(book=> <Book key={book.bookId} book = {book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;