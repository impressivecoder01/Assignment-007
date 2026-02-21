import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';


const Footer = () => {
    return (
        <div className='bg-black text-white grid grid-cols-1 lg:grid-cols-5 px-1 py-10 items-center gap-6'>
            <div>
                <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
                <p>Our platform makes buying tickets simple, fast, and reliable. Whether you're looking for concerts, sports events, movies, travel, or special shows, we bring all options together in one convenient place. With an easy-to-use interface, </p>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Company</h1>
                <ul>
                    <li>About Us</li>
                    <li>Our Mission</li>
                    <li>Contact Sale</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Services</h1>
                <ul>
                    <li>Products & Services</li>
                    <li>Customer Stories</li>
                    <li>Download Apps</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Information</h1>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Join Us</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Social Links</h1>
                <ul>
                    <li className='flex gap-1'>
                <Instagram /> Instagram
                    </li>
                    <li className='flex gap-1'>
                        <Linkedin /> LinkdIn
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;