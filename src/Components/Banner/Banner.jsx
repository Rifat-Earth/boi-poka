import React from 'react';
import bannerImage from '../../assets/books.png';

const Banner = () => {
    return (
        <div className="hero max-w-6xl mx-auto bg-base-200 py-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books Office News!</h1>
                    <p className="py-6">
                       Welcome to our Book Store! We are passionate about books and love sharing knowledge with our community.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;