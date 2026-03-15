import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toGetData } from '../utility/addToDB';


const ReadList = () => {
    const [readBook, setReadBook] = useState([])

    const bookData = useLoaderData()

    // const wishList = toGetData()
    // const wishBook = Array.isArray(bookData)
    // ? bookData.filter(book => wishList.includes(book.bookId))
    // : [];

    useEffect(() => {
        const storedBook = toGetData()
        const myReadList = bookData.filter(book =>
            storedBook.includes(book.bookId)
        )
        setReadBook(myReadList)
    }, [bookData])

    return (
        <div className='max-w-6xl mx-auto py-10'>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    {

                        readBook?.map(book => 
                            <>
                           
                                <div key={book.bookId} className="card bg-base-100 flex flex-col md:flex-row shadow-sm p-5">
                                    <figure className='bg-neutral-200 p-5 rounded-2xl'>
                                        <img className='w-[800px] p-2 '
                                            src={book.image}
                                            alt="book" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            
                                            {book.author}
                                            <div className="badge badge-secondary">{book.yearOfPublishing}</div>

                                        </h2>
                                        
                                        <p><span className='font-bold'>Name:</span> {book.bookName}</p>
                                        <span>{book.review}</span>
                                        <div className="card-actions justify-start">
                                            <div className="badge badge-outline p-2 ">{book.category}</div>
                                            <div className="badge badge-outline p-2 ml-10 font-bold">{book.rating}</div>
                                        </div>
                                    </div>

                                </div>

                            </>
                        )

                    }
                </TabPanel>
                <TabPanel>
                     {/* {

                        wishBook?.map(book =>
                            <>
                                <div className="card bg-base-100 flex flex-col md:flex-row shadow-sm p-5">
                                    <figure className='bg-neutral-200 p-5 rounded-2xl'>
                                        <img className='w-[800px] p-2 '
                                            src={book.image}
                                            alt="book" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            
                                            {book.author}
                                            <div className="badge badge-secondary">{book.yearOfPublishing}</div>

                                        </h2>
                                        
                                        <p><span className='font-bold'>Name:</span> {book.bookName}</p>
                                        <span>{book.review}</span>
                                        <div className="card-actions justify-start">
                                            <div className="badge badge-outline p-2 ">{book.category}</div>
                                            <div className="badge badge-outline p-2 ml-10 font-bold">{book.rating}</div>
                                        </div>
                                    </div>

                                </div>

                            </>
                        )

                    } */}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;