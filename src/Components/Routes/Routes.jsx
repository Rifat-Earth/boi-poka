import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../../Pages/Root';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import BookDetails from '../BookDetails/BookDetails';
import Error from '../../Pages/Error';

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement: <Error></Error> ,
   children: [
    {
        index: true,
        Component: Home,   
        loader: ()=>fetch('/booksData.json')
        .then(res=>res.json()),  
        
    },
    {
        path:'about',
        Component:About
    },
    {
        path:'contact',
        Component: Contact
    },
    {
        path: 'bookDetails/:bookId',
        Component: BookDetails,
        loader: ()=>fetch('/booksData.json')
        .then(res=>res.json()),
    }
   ]
  },
]);