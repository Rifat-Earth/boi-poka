import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
   
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message is send",
            showConfirmButton: false,
            timer: 1500
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-3"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full border border-gray-300 rounded-md p-3"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >

                    Send Message
                </button>

            </form>

        </div>
    );
};

export default Contact;
